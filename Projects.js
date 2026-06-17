import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    tag: 'React.js',
    desc: 'A fully responsive personal portfolio built with React, featuring multi-page routing, animated components, and dynamic content rendering.',
    tech: ['React', 'React Router', 'CSS3', 'Hooks'],
    color: '#c9a84c',
  },
  {
    id: 2,
    title: 'Business Dashboard',
    tag: 'Data & UI',
    desc: 'An interactive dashboard for tracking business KPIs, with filterable tables and dynamic chart rendering using React state management.',
    tech: ['React', 'useState', 'useEffect', 'CSS Grid'],
    color: '#0f1b2d',
  },
  {
    id: 3,
    title: 'Task Manager App',
    tag: 'Full CRUD',
    desc: 'A task management application demonstrating full CRUD operations, custom hooks, and persistent state with localStorage integration.',
    tech: ['React', 'Custom Hooks', 'localStorage', 'useReducer'],
    color: '#4a7c6f',
  },
];

function Projects() {
  const [active, setActive] = useState(null);

  return (
    <div className="projects page">
      <div className="section">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Projects</h2>
        <p className="projects-sub">A collection of work demonstrating component architecture, hooks usage, and routing in React.</p>

        <div className="projects-grid">
          {projects.map((p) => (
            <div
              className={`project-card ${active === p.id ? 'active' : ''}`}
              key={p.id}
              onClick={() => setActive(active === p.id ? null : p.id)}
            >
              <div className="card-accent" style={{ background: p.color }} />
              <div className="card-body">
                <span className="card-tag">{p.tag}</span>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.desc}</p>
                <div className="card-tech">
                  {p.tech.map((t) => (
                    <span className="tech-chip" key={t}>{t}</span>
                  ))}
                </div>
                {active === p.id && (
                  <div className="card-expanded">
                    <p>✓ Component-based architecture</p>
                    <p>✓ React Hooks implementation</p>
                    <p>✓ Responsive design</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
