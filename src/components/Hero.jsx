// filepath: src/components/Hero.jsx
import React, { useState, useEffect } from 'react';

function Hero() {
  const roles = [
    "Full-stack Developer",
    "Video Editor",
    "Thumbnail Maker",
    "Mobile Developer",
    "YouTuber"
  ];
  
  const [displayedRole, setDisplayedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const typingEffect = setTimeout(() => {
      const currentRole = roles[roleIndex];
      
      if (!isDeleting) {
        // Typing effect
        if (charIndex < currentRole.length) {
          setDisplayedRole(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          setTypingSpeed(150);
        } else {
          // Pause at the end of typing
          setIsDeleting(true);
          setTypingSpeed(1000);
        }
      } else {
        // Deleting effect
        if (charIndex > 0) {
          setDisplayedRole(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          setTypingSpeed(50);
        } else {
          // Move to the next role
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(typingEffect);
  }, [charIndex, isDeleting, roleIndex, roles, typingSpeed]);  return (
    <section id="hero" className="hero-section">
      <div className="hero-content" data-aos="fade-right" data-aos-once="true">
        <div className="glowing-circle"></div>        
        <h1 data-aos="fade-up" data-aos-delay="200" data-aos-once="true">Hello, I'm <span className="highlight">Flameblade</span></h1>
        <div className="typing-container" data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
          <h2>I am a <span className="typing-text">{displayedRole}</span><span className="cursor">|</span></h2>
        </div>
        <p data-aos="fade-up" data-aos-delay="600" data-aos-once="true">Welcome to my portfolio. I am just a normal dude, but secretly, I'm a tryhard.</p>
        <div className="cta-buttons" data-aos="fade-up" data-aos-delay="800" data-aos-once="true">
          <a href="#contact" className="btn primary-btn">Contact Me</a>
          <a href="#about" className="btn secondary-btn">Learn More</a>
        </div>
      </div>      <div className="hero-image" data-aos="fade-left" data-aos-delay="400" data-aos-once="true">
        <div className="image-glow">
          <img src="/src/assets/bestflameblade.png" alt="Flameblade" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
