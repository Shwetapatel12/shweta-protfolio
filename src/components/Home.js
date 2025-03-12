import React from 'react';
import '../styles/Home.css';
import profilePic from '../assets/my.jpg'; // Add your profile image to the assets folder

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="home-content">
                <img src={profilePic} alt="Shweta Patel" className="profile-img" />
                <h2>Hello, I'm <span className="highlight">Shweta Patel</span></h2>
                <p>Software Developer | Java | Python | React</p>

                <div className="social-links">
                    <a href="https://github.com/Shwetapatel12" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/shweta-patel-509268237" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:shweta0712jbp@gmail.com">Email</a>
                </div>
            </div>
        </section>
    );
};

export default Home;
