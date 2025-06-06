// filepath: src/components/Services.jsx
import React from 'react';

function Services() {  const services = [
    {
      title: "Thumbnail Design",
      description: "Eye-catching, high-converting thumbnail designs that increase click-through rates for YouTube and other platforms.",
      icon: "🎭" // Replace with an actual icon component
    },
    {
      title: "Video Editing",
      description: "Simple video editing with seamless transitions, effects, and color grading to bring your content to life.",
      icon: "🎬" // Replace with an actual icon component
    },
    {
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications using Kotlin, Java, and React Native, and Flutter",
      icon: "📱" // Replace with an actual icon component
    },
    {
      title: "Web Development",
      description: "Custom website development using React, JavaScript, HTML/CSS to create responsive and user-friendly experiences.",
      icon: "💻" // Replace with an actual icon component
    },
    {
      title: "Programming",
      description: "Experienced in multiple languages including Java, Python, C++, C#, JavaScript, Kotlin, and Dart.",
      icon: "🖥️" // Replace with an actual icon component
    }
  ];

  return (    <section id="services" className="services-section">
      <div className="section-title" data-aos="fade-up">
        <h2>Creative Services</h2>
        <div className="underline"></div>
      </div>
      
      <div className="services-container">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="service-card" 
            data-aos="flip-up" 
            data-aos-delay={100 * index}
          >
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#contact" className="service-link">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
