<<<<<<< HEAD
// src/App.jsx
=======
>>>>>>> 4fd1fbdc02cf29c1820943210bb26b3fad0ae01e
import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
<<<<<<< HEAD
import Certifications from './sections/Certifications';
import Highlights from './sections/Highlights';
=======
import Testimonial from './sections/Testimonial';
>>>>>>> 4fd1fbdc02cf29c1820943210bb26b3fad0ae01e
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
<<<<<<< HEAD
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
=======
  return ( 
  <div className='container mx-auto max-w-7xl'>
  <Navbar/>
  <Hero/>
  <About/>
  <Projects/>
  <Experiences/>
  <Testimonial/>
  <Contact/>
  <Footer/>
  </div>
>>>>>>> 4fd1fbdc02cf29c1820943210bb26b3fad0ae01e
  );
};

export default App;