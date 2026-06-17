import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [typed, setTyped] = useState('');
  const roles = ['BBA Student', 'CS Enthusiast', 'Problem Solver', 'React Developer'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let current = roles[roleIndex];
    let i = 0;
    const type = setInterval(() => {
      setTyped(current.slice(0, i + 1));
      i++;
      if (i === current.length) {
        clearInterval(type);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 80);
    return () => clearInterval(type);
  }, [roleIndex]);

  return (
    <div className="home page">
      <div className="hero">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Tabassum<br />Alim Ridita</h1>
          <p className="hero-role">
            <span className="typed-text">{typed}</span>
            <span className="cursor">|</span>
          </p>
          <p className="hero-desc">
            Undergraduate student at Pacific States University pursuing
            BBA in Computer Science for Business — blending analytical
            thinking with modern technology.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="avatar-ring">
            <div className="avatar-initials">TAR</div>
          </div>
        </div>
      </div>

      <div className="stats-bar">
        {[['2025', 'Enrolled'], ['PSU', 'University'], ['BBA/CS', 'Program'], ['React', 'Framework']].map(([val, label]) => (
          <div className="stat" key={label}>
            <span className="stat-val">{val}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
