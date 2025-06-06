import { useState } from 'react';
import Header from "./Header.jsx";
import './index.css';

// Import components for portfolio sections
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import ScrollIndicator from "./components/ScrollIndicator.jsx";

function App() {
  return (
    <div className="portfolio-container">
      <ScrollIndicator />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
