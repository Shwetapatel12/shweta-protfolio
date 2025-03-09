const skills = ["Java", "Python", "Django", "Spring Boot", "React", "SQL", "Linux"];

const Skills = () => {
  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
