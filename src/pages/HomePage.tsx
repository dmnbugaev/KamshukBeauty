import React from 'react';
import Hero from '../components/Hero';
import Statement from '../components/Statement';
import ServicesGrid from '../components/ServicesGrid';
import WorkShowcase from '../components/WorkShowcase';
import PriceList from '../components/PriceList';
import AboutFounder from '../components/AboutFounder';
import StudioSpace from '../components/StudioSpace';
import Testimonials from '../components/Testimonials';
import BookNow from '../components/BookNow';
import ContactInfo from '../components/ContactInfo';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
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
    </div>
  );
};

export default HomePage;