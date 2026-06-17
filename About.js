import React, { useState } from 'react';
import './About.css';

const skills = [
  { name: 'React.js', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'HTML & CSS', level: 90 },
  { name: 'Python', level: 65 },
  { name: 'Business Analysis', level: 85 },
  { name: 'Data Management', level: 70 },
];

function About() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="about page">
      <div className="section">
        <p className="section-label">Who I Am</p>
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>I'm <strong>Tabassum Alim Ridita</strong>, an undergraduate student at <strong>Pacific States University</strong>, enrolled since 2025 in a Bachelor of Business Administration with a focus on Computer Science for Business.</p>
            <p>My academic journey bridges the gap between technology and business — I believe the most impactful solutions come from understanding both worlds deeply.</p>
            <p>I'm passionate about building clean, user-friendly web applications and applying computational thinking to real business problems.</p>

            <div className="info-cards">
              {[
                ['🎓', 'University', 'Pacific States University'],
                ['📚', 'Program', 'BBA / Computer Science'],
                ['📅', 'Enrolled', '2025 — Present'],
                ['📍', 'Focus', 'Web Development & Business'],
              ].map(([icon, label, val]) => (
                <div className="info-card" key={label}>
                  <span className="info-icon">{icon}</span>
                  <div>
                    <p className="info-label">{label}</p>
                    <p className="info-val">{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-panel">
            <h3>Skills</h3>
            {skills.map((skill) => (
              <div
                className="skill-row"
                key={skill.name}
                onMouseEnter={() => setHovered(skill.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="skill-top">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{
                      width: `${skill.level}%`,
                      background: hovered === skill.name ? '#c9a84c' : '#0f1b2d',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
