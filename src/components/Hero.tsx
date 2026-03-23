import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="about">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="hero-greeting">Hello, I'm</h2>
        <h1 className="hero-name">Alfred Biju</h1>
        <h3 className="hero-title">Python / Full-Stack Developer</h3>
        <p className="hero-desc">
          Building scalable backend APIs, asynchronous processing systems, and beautiful modern web apps using Python, FastAPI, and React.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#experience" className="btn btn-secondary">My Experience</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
