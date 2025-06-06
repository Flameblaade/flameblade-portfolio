// filepath: src/components/About.jsx
import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-title">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>
        <div className="about-content">        <div className="about-text" data-aos="fade-right" data-aos-delay="100" data-aos-once="true">
          <h3>Who I Am</h3>
          <p>
            I'm a passionate developer and a content creator with a strong focus on creating clean, 
            user-friendly experiences. With a background in design and development, 
            I bring both creativity and technical expertise to every project.
          </p>
            <h3>My Background</h3>
          <p>
            I was just a kid who loved playing video games, but I never thought I would be able to create my own.
            Now the goal is to learn as much as I can about programming and be a certified full stack developer.
          </p>
        </div>
          <div className="about-image" data-aos="fade-left" data-aos-delay="100">
          <div className="image-frame">
            <img src="/src/assets/bestflameblade.png" alt="Flameblade" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
