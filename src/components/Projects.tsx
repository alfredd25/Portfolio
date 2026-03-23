import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    title: "NutriTrack - Full-Stack Calorie Tracker",
    date: "Mar '26 – Present",
    desc: [
      "Built a production-style FastAPI backend with PostgreSQL, SQLAlchemy, and Alembic for 100% migration-driven schema management.",
      "Implemented Celery + Redis workflows for API responsiveness ~30% improvement.",
      "Automated Jenkins CI/CD pipeline to deploy containerized pytest suites."
    ],
    tech: ["FastAPI", "Next.js", "PostgreSQL", "Redis", "Celery", "Docker", "AWS EC2", "Jenkins"],
    github: "https://github.com/alfredd25/NutriTrack",
    website: "https://github.com/alfredd25/NutriTrack"
  },
  {
    title: "Crypto Matching Engine",
    date: "Sep '25 – Oct '25",
    desc: [
      "High-performance crypto matching engine with O(log n) price level lookups using SortedDict.",
      "Implemented 4 advanced order types with partial fill support; validated 5,000+ throughput.",
      "Exposed REST and WebSocket APIs using FastAPI/Uvicorn for real-time order book snapshots."
    ],
    tech: ["Python", "FastAPI", "Uvicorn", "Pydantic", "Pytest", "WebSockets"],
    github: "https://github.com/alfredd25/cryptomatchingengine"
  }
];

const Projects: React.FC = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <motion.div 
              className="project-card"
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={20} /></a>}
                  {project.website && <a href={project.website} target="_blank" rel="noreferrer"><ExternalLink size={20} /></a>}
                </div>
              </div>
              <p className="project-date">{project.date}</p>
              
              <ul className="project-desc">
                {project.desc.map((d, i) => <li key={i}>{d}</li>)}
              </ul>

              <div className="project-tech">
                {project.tech.map((t, i) => <span key={i}>{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
