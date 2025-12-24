import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Statement from './components/Statement';
import ServicesGrid from './components/ServicesGrid';
import WorkShowcase from './components/WorkShowcase';
import PriceList from './components/PriceList';
import AboutFounder from './components/AboutFounder';
import StudioSpace from './components/StudioSpace';
import Testimonials from './components/Testimonials';
import BookNow from './components/BookNow';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <Statement />
      <ServicesGrid />
      <WorkShowcase />
      <PriceList />
      <AboutFounder />
      <StudioSpace />
      <Testimonials />
      <BookNow />
      <ContactInfo />
      <Footer />
    </div>
  );
}
