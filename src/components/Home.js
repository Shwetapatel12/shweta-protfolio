import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/my.jpg"; // Ensure the image path is correct
import "./Home.css"; // Import CSS for styling

const journey = [
  {
    year: "Dec 2024 - Present",
    title: "Junior Software Developer - RAK SOFTECH",
    description:
      "Developing REST APIs, handling authentication, and building frontend UI.",
  },
  {
    year: "July 2024 - Dec 2024",
    title: "Python Developer - TEKNIKOZ",
    description:
      "Worked on REST APIs, automation scripts, and database management.",
  },
  {
    year: "2020 - 2024",
    title: "B.Tech - Computer Science & Engineering",
    description: "Shri Ram Institute of Technology, Jabalpur (CGPA: 8.4)",
  },
  {
    year: "2024",
    title: "FriendHub - Social Media Platform",
    description:
      "Developed a social media platform using Django, focusing on database management & UI.",
  },
  {
    year: "2024",
    title: "Employee Management System",
    description:
      "Created a Java Spring Boot application to manage employees with RESTful APIs.",
  },
  {
    year: "2021 - 2024",
    title: "NCC",
    description:
      "As a dedicated NCC Cadet, I have actively participated in multiple national camps, including the Rock Climbing Camp (4MPCTR-2024), and led an NCC camp as Camp Senior. I have earned various medals for excellence in drills, leadership, endurance training, and team coordination. Through my NCC journey, I have developed strong leadership, discipline, and crisis management skills, preparing me to excel in high-pressure environments. ",
  },
  {
    year: "2020 - Present",
    title: "Basketball Player",
    description:
      "As a passionate basketball player, I have competed at the state level and achieved a gold medal, showcasing my skills in teamwork, strategy, and athletic excellence. My journey in basketball has honed my leadership, agility, and competitive spirit, allowing me to excel under pressure and contribute effectively to my team’s success. 🏀🥇",
  },
  {
    year: "2022",
    title: "Jarvis - AI Virtual Assistant",
    description:
      "Built an AI-powered personal assistant with voice commands and automation.",
  },
];

const skills = [
  "Java", "Python", "Django", "Spring Boot", "React", "SQL", "Linux"
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <motion.img
          src={profile}
          alt="Shweta Patel"
          className="profile-img"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <h2>Hi, I'm <span>Shweta Patel</span></h2>
        <p>SOFTWARE ENGINEER</p>
        <a href="https://github.com/Shwetapatel12" target="_blank" rel="noreferrer">
          View My Work
        </a>
      </section>

      {/* Journey Timeline */}
      <section className="timeline">
        <h2>My Journey</h2>
        {journey.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: shweta0712jbp@gmail.com</p>
        <p>Phone: +91-7879258597</p>
        <p>
          <a href="https://www.linkedin.com/in/shweta-patel-509268237" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </section>
    </div>
  );
};

export default Home;
