import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TrainingPage from './pages/TrainingPage';
import Layout from './components/Layout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="training" element={<TrainingPage />} />
          {/* Добавьте другие маршруты по мере необходимости */}
        </Route>
      </Routes>
    </Router>
  );
}