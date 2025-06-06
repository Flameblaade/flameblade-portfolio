// filepath: src/components/Experience.jsx
import React from 'react';

function Experience() {
  const projectsData = [
    {
      id: 1,
      title: "Snake Game",
      description: "A classic Snake game coded in Java. Features include score tracking, increasing difficulty, and responsive controls.",
      imageSrc: "/src/assets/snake.png",
      tags: ["Java", "Game Development"]
    },
    {
      id: 2,
      title: "Capstone Project",
      description: "My capstone project showcasing advanced programming skills and problem-solving capabilities.",
      imageSrc: "/src/assets/capstone.png",
      tags: ["Team Project", "Full Stack"]
    },
    {
      id: 3,
      title: "YouTube Thumbnails",
      description: "Proof of my thumbnail design skills for YouTube content. Created engaging visual content that drives clicks and engagement.",
      imageSrc: "/src/assets/thumbnail.jpg",
      tags: ["Design", "Content Creation"]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-title" data-aos="fade-up" data-aos-once="true">
        <h2>My Experience</h2>
        <div className="underline"></div>
      </div>
      
      <div className="experience-content" data-aos="fade-up" data-aos-once="true">
        <div className="projects-showcase">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="project-showcase-item"
              data-aos="fade-up"
              data-aos-delay={project.id * 100}
            >
              <div className="project-showcase-image">
                <img src={project.imageSrc} alt={project.title} />
              </div>
              <div className="project-showcase-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-showcase-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
