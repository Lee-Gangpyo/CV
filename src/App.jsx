import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Network from './components/Network';
import Philosophy from './components/Philosophy';
import ResearchInterests from './components/ResearchInterests';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Awards from './components/Awards';
import Footer from './components/Footer';
import MouseSpotlight from './components/MouseSpotlight';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-primary min-h-screen text-text-main selection:bg-accent selection:text-primary">
        <MouseSpotlight />
        <Navbar />
        <Hero />
        <About />
        <Philosophy />
        <ResearchInterests />
        <Experience />
        <Projects />
        <Publications />
        <Awards />
        <Network />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
