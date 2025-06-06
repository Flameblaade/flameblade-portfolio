// filepath: src/components/Projects.jsx
import React from 'react';

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Snake Game",
      description: "A classic Snake game coded in Java. Features include score tracking, increasing difficulty, and responsive controls.",
      imageSrc: "/src/assets/snake.png",
      tags: ["Java", "Game Development"],
      link: "#" // You can update this with an actual link if available
    },
    {
      id: 2,
      title: "Capstone Project",
      description: "My capstone project showcasing advanced programming skills and problem-solving capabilities.",
      imageSrc: "/src/assets/capstone.png",
      tags: ["Team Project", "Full Stack"],
      link: "#" // You can update this with an actual link if available
    },
    {
      id: 3,
      title: "YouTube Thumbnails",
      description: "Proof of my thumbnail design skills for YouTube content. Created engaging visual content that drives clicks and engagement.",
      imageSrc: "/src/assets/thumbnail.jpg",
      tags: ["Design", "Content Creation"],
      link: "#" // You can update this with an actual link if available
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-title" data-aos="fade-up">
        <h2>My Projects</h2>
        <div className="underline"></div>
      </div>
      
      <div className="projects-container">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={project.id * 100}
          >
            <div className="project-image">
              <img src={project.imageSrc} alt={project.title} />
              <div className="project-overlay">
                <a href={project.link} className="btn primary-btn" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
