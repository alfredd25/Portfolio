import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="section-container">
        <h2 className="section-title">Experience & Achievements</h2>
        
        <div className="experience-container">
          <motion.div 
            className="experience-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="exp-header">
              <h3>Freelancer.com — Python Developer (Project-Based)</h3>
              <span className="exp-date">Since Dec '25 • Remote</span>
            </div>
            <ul className="exp-list">
              <li>Engineered scalable backend APIs using Python and FastAPI, handling 1,000+ requests/day with optimized routing.</li>
              <li>Architected and developed Telegram bot systems integrating REST APIs, serving 38,000+ active user group.</li>
              <li>Executed asynchronous processing using async/await, reducing response time by ~30% under concurrent loads.</li>
            </ul>
          </motion.div>

          <motion.div 
            className="achievement-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Achievements & Education</h3>
            <div className="achieve-item">
              <h4>Hackathon Finalist — Fynd Hactimus (Dec '25)</h4>
              <p>Built a production-ready solution using Python, FastAPI, and Boltic; selected among top finalists out of 140+ teams.</p>
            </div>
            <div className="achieve-item">
              <h4>Data Structures & Algorithms (Jan '24 - Present)</h4>
              <p>Solved 200+ coding problems across various platforms focusing on DP, Trees, and core patterns.</p>
            </div>
            <div className="achieve-item education">
              <h4>Lovely Professional University</h4>
              <p>B.Tech Computer Science & Engineering | CGPA: 7.8 (Since Aug 2023)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
