import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">Alfred.dev</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      <div className="nav-socials">
        <a href="https://github.com/alfredd25" target="_blank" rel="noreferrer"><Github size={20} /></a>
        <a href="https://www.linkedin.com/in/alfredbiju13" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
        <a href="mailto:alfredbiju7@gmail.com"><Mail size={20} /></a>
      </div>
    </nav>
  );
};

export default Navbar;
