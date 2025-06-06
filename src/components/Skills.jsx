// filepath: src/components/Skills.jsx
import React from 'react';

function Skills() {  const technicalSkills = [
    { name: "HTML/CSS", icon: "🌐" },
    { name: "JavaScript", icon: "📜" },
    { name: "React", icon: "⚛️" },
    { name: "Java", icon: "☕" },
    { name: "Python", icon: "🐍" },
    { name: "C++", icon: "🧮" },
    { name: "C#", icon: "🎮" },
    { name: "Kotlin", icon: "📱" },
    { name: "Flutter", icon: "💙" },
    { name: "Video Editing", icon: "🎬" },
    { name: "Thumbnail Design", icon: "🎭" }
  ];

  const softSkills = [
    "Problem Solving",
    "Teamwork",
    "Communication",
    "Time Management",
    "Adaptability"
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-title" data-aos="fade-up">
        <h2>My Skills</h2>
        <div className="underline"></div>
      </div>
      
      <div className="skills-container">
        <div className="technical-skills" data-aos="fade-right" data-aos-delay="100">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {technicalSkills.map((skill, index) => (
              <div 
                key={index} 
                className="tech-skill-card"
                data-aos="zoom-in"
                data-aos-delay={100 + (index * 50)}
              >
                <div className="tech-skill-icon">
                  {skill.icon}
                </div>
                <h4>{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
        
        <div className="soft-skills" data-aos="fade-left" data-aos-delay="300">
          <h3>Soft Skills</h3>
          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div 
                key={index} 
                className="soft-skill-item"
                data-aos="fade-up"
                data-aos-delay={300 + (index * 100)}
              >
                <div className="skill-icon">
                  {/* Icon would go here */}
                </div>
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
