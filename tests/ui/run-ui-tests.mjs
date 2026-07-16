import { spawn } from 'node:child_process'
import http from 'node:http'

const port = 3107
const url = `http://127.0.0.1:${port}`
const isWindows = process.platform === 'win32'

function waitForServer(deadlineMs = 120_000) {
  const startedAt = Date.now()

  return new Promise((resolve, reject) => {
    const check = () => {
      const request = http.get(url, (response) => {
        response.resume()
        resolve()
      })

      request.on('error', () => {
        if (Date.now() - startedAt > deadlineMs) {
          reject(new Error(`Timed out waiting for ${url}`))
          return
        }
        setTimeout(check, 1_000)
      })

      request.setTimeout(2_000, () => {
        request.destroy()
      })
    }

    check()
  })
}

function run(command, args, options = {}) {
  return new Promise((resolve) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: isWindows,
      ...options,
    })
    child.on('exit', (code) => resolve(code ?? 1))
  })
}

async function stopProcessTree(processId) {
  if (!processId) {
    return
  }

  if (isWindows) {
    await run('taskkill.exe', ['/PID', String(processId), '/T', '/F'], { stdio: 'ignore' })
    return
  }

  try {
    process.kill(-processId, 'SIGTERM')
  } catch {
    process.kill(processId, 'SIGTERM')
  }
}

const npmCommand = isWindows ? 'npm.cmd' : 'npm'
const npxCommand = isWindows ? 'npx.cmd' : 'npx'
const playwrightArgs = ['playwright', 'test', ...process.argv.slice(2)]

let exitCode = 1
let server

try {
  const buildCode = await run(npmCommand, ['run', 'build'])
  if (buildCode !== 0) {
    process.exit(buildCode)
  }

  server = spawn('node', ['.output/server/index.mjs'], {
    stdio: 'inherit',
    shell: isWindows,
    detached: !isWindows,
    env: {
      ...process.env,
      HOST: '127.0.0.1',
      PORT: String(port),
    },
  })

  await waitForServer()
  exitCode = await run(npxCommand, playwrightArgs, {
    env: {
      ...process.env,
      PLAYWRIGHT_BASE_URL: url,
      UI_AUDIT_SERVER_STARTED: '1',
    },
  })
} finally {
  await stopProcessTree(server?.pid)
}

process.exit(exitCode)
