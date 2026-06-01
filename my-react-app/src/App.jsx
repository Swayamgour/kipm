import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import WhyChooseUs from './components/WhyChooseUs';
import CampusInfrastructure from './components/CampusInfrastructure';
import DirectorMessage from './components/DirectorMessage';
import StudentBenefits from './components/StudentBenefits';
import CampusAmenities from './components/CampusAmenities';
import FaqSection from './components/FaqSection';
import AdmissionForm from './components/AdmissionForm';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StickyButton from './components/StickyButton';
import './App.css';

function App() {
  return (
    <div className="app">
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <WhyChooseUs />
      <CampusInfrastructure />
      <DirectorMessage />
      <StudentBenefits />
      <CampusAmenities />
      <FaqSection />

      {/* Scroll Target */}
      <div id="admission-form">
        <AdmissionForm />
      </div>

      <ContactSection />
      <Footer />
      <StickyButton />
    </div>
  );
}

export default App;