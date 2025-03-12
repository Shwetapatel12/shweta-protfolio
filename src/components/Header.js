import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <nav className="header">
            <h1>Shweta Patel</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Header;
