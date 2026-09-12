// src/App.jsx
import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
import Certifications from './sections/Certifications';
import Highlights from './sections/Highlights';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />
      <div id="home" className="scroll-mt-20"><Hero /></div>
      <div id="about" className="scroll-mt-20"><About /></div>
      <div id="work" className="scroll-mt-20"><Projects /></div>
      <div id="experience" className="scroll-mt-20"><Experiences /></div>
      <div id="certifications" className="scroll-mt-20"><Certifications /></div>
      <div id="highlights" className="scroll-mt-20"><Highlights /></div>
      <div id="contact" className="scroll-mt-20"><Contact /></div>
      <Footer />
    </div>
  );
};

export default App;