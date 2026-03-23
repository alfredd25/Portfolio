import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsData = [
  {
    category: "Languages & Core",
    items: ["Python", "SQL", "JavaScript", "React"]
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "Flask", "REST APIs", "WebSockets", "AsyncIO", "SQLAlchemy"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Redis", "MySQL", "MongoDB"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "Jenkins", "AWS (EC2, S3)", "Nginx", "Celery", "Prometheus", "Grafana", "Pytest"]
  }
];

const Skills: React.FC = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillsData.map((group, index) => (
            <motion.div 
              className="skill-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3>{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
