const projects = [
    {
      name: "Friend Hub",
      description: "A social media platform using Django.",
      link: "https://github.com/Shwetapatel12/FRIENDHUB"
    },
    {
      name: "Employee Management System",
      description: "A Java Spring Boot project for managing employees.",
      link: "https://github.com/Shwetapatel12"
    },
    {
      name: "Jarvis",
      description: "AI-powered voice assistant built with Python.",
      link: "https://github.com/Shwetapatel12/JARVIS"
    }
  ];
  
  const Projects = () => {
    return (
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  