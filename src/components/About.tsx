import React from 'react';
import { GraduationCap, MapPin, Calendar, User } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const educationData = [
    {
      title: 'Bachelor of Technology - Computer Science and Engineering; CGPA: 7.8',
      institution: 'Lovely Professional University Punjab, India',
      year: 'Since August 2023'
    },
    {
      title: 'Intermediate; Percentage 85.6%',
      institution: 'Lisieux English School Vaikom, Kerala',
      year: 'April 2021 - March 2023'
    },
    {
      title: 'Matriculation; Percentage 93%',
      institution: 'Lisieux English School Vaikom, Kerala',
      year: 'April 2020 - March 2021'
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="heading-container">
        <h2 className="heading-main">ABOUT ME</h2>
        <hr className="heading-divider" />
      </div>

      <div className="about-container">
        {/* Top Row: Profile & About Content */}
        <div className="about-top-row">
          
          <div className="profile-card">
            <div className="profile-image-container">
              {/* Fallback to user icon if profile image fails to load */}
              <div className="profile-placeholder">
                <User size={64} className="profile-icon" />
              </div>
              <img 
                src="/pfp.jpeg" 
                alt="Alfred Biju" 
                className="profile-img" 
                onError={(e) => (e.currentTarget.style.display = 'none')} 
              />
            </div>
            <h3 className="profile-name">Alfred Biju</h3>
            <p className="profile-role">Backend & Systems Engineer</p>
          </div>

          <div className="about-text-card">
            <h3 className="card-heading">ABOUT</h3>
            <p className="about-paragraph">
              I'm a versatile Backend & Systems Engineer with a keen interest in high-performance architecture and cloud administration. I'm passionate about crafting robust, secure, and scalable backend applications. My skill set spans from API development to asynchronous task processing and infrastructure management.
            </p>
            <p className="about-paragraph">
              By understanding the full infrastructure stack, I build systems that are not only functional but also resilient under load. I'm committed to staying ahead of emerging technologies to deliver exceptional backend solutions.
            </p>
          </div>
          
        </div>

        {/* Bottom Row: Education */}
        <div className="education-card">
          <h3 className="card-heading">EDUCATION</h3>
          <div className="education-grid">
            {educationData.map((edu, idx) => (
              <div className="edu-box" key={idx}>
                <div className="edu-icon-container">
                  <GraduationCap size={20} className="edu-icon" />
                </div>
                <h4 className="edu-title">{edu.title}</h4>
                <p className="edu-institution">
                  <MapPin size={14} className="edu-meta-icon" />
                  {edu.institution}
                </p>
                <div className="edu-year">
                  <Calendar size={14} className="edu-meta-icon" />
                  {edu.year}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
