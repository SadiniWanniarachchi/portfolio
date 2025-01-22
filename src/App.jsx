import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
  
      <About />
      <div className="min-h-screen bg-[#060606]">
      <Projects />
    </div>
      <Skills />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
