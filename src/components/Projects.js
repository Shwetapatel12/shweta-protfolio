import React from 'react';
import '../styles/project.css';

const Projects = () => {
    const projectData = [
        {
            name: "Friend Hub",
            description: "A social media platform combining features from Instagram, LinkedIn, and Strava. Users can share posts, connect professionally, and track fitness activities.",
            link: "https://github.com/Shwetapatel12/FRIENDHUB",
            techStack: "React Native, Django, MongoDB, AWS S3",
            image: "https://via.placeholder.com/340x180?text=FriendHub" // Replace with actual image URL
        },
        {
            name: "Jarvis (AI Assistant)",
            description: "An AI-powered virtual assistant capable of performing tasks such as searching the web, sending emails, fetching weather reports, and automating system commands.",
            link: "https://github.com/Shwetapatel12/JARVIS",
            techStack: "Python, NLP, OpenAI, Speech Recognition",
            image: "https://via.placeholder.com/340x180?text=Jarvis" // Replace with actual image URL
        },
        {
            name: "Weather Monitoring System",
            description: "A real-time weather monitoring dashboard that collects data from OpenWeatherMap API and visualizes trends, alerts, and daily weather summaries.",
            link: "https://github.com/Shwetapatel12/weather_monitoring_system",
            techStack: "Django, OpenWeatherMap API, React, PostgreSQL",
            image: "https://via.placeholder.com/340x180?text=Weather+Monitoring" // Replace with actual image URL
        },
        {
            name: "AI Task Manager",
            description: "An intelligent task management web app that uses AI to prioritize tasks, set reminders, and automate scheduling based on user preferences.",
            link: "#", // Add GitHub link when available
            techStack: "React, Java, Spring Boot, AI Algorithms",
            image: "https://via.placeholder.com/340x180?text=AI+Task+Manager" // Replace with actual image URL
        }
    ];

    return (
        <section id="projects" className="projects">
            <hr color='white'/>
            <h2>Projects</h2>
            <div className="project-container">
                {projectData.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.name} />
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <p className="tech-stack"><strong>Tech Stack:</strong> {project.techStack}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
