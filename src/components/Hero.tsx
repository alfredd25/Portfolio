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
        <h3 className="hero-title">Backend & Systems Engineer</h3>
        <p className="hero-desc">
          I build high-performance backend systems — REST & WebSocket APIs, async task pipelines, and production-ready infrastructure with Python, FastAPI, and Docker.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#experience" className="btn btn-secondary">View Experience</a>
          <a href="/resume.pdf" className="btn btn-secondary" download>Download CV</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
