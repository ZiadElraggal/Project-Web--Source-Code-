// Projects.jsx
import React from 'react';
import ScriptProjects from '/public/ScriptProjects';

const Projects = () => {
  return (
    <div>
      <div className="neon-box">
        <div className="neon-sign">
          <h1 className="neon" data-text="U">Zia<span className="flicker-slow">d E</span>lr<span className="flicker-fast">agg</span>al</h1>
          <h2>My Projects</h2>
        </div>
      </div>
      <div className="logo" id="logo">
        <h1 className="neon" data-text="U"><span className="flicker-fast2">Z</span><span className="flicker-slow2">E</span></h1>
      </div>
      <div className="projects-container">
        <div className="project">
          <div className="project-title">Project Web</div>
          <div className="project-description">
            This project represents the culmination of extensive effort and commitment spanning hundreds of hours. Through its development, I gained invaluable expertise in various coding languages and acquired insights into the nuances of website development etiquette
            <div className="project-buttons">
              <a href="./" className="view-project-button">View Project</a>
              <a href="https://github.com/ZiadElraggal/ZiadElraggal.github.io" className="source-code-button">Source Code</a>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <div className="project">
          <div className="project-title">Project 3706</div>
          <div className="project-description2">
          This project involves a MATLAB script designed to interface with the Keithley 3706A digital multimeter, facilitating continuous temperature data acquisition. Notable features include customizable naming schemes, commented code, and a comprehensive user manual, although unreleased.
            <div className="project-buttons">
              <button id="view-project-button">View Project</button>
              <a href="https://github.com/ZiadElraggal/Project3706" className="source-code-button">Source Code</a>
            </div>
          </div>
        </div>
      </div>
      <div id="video-modal">
        <video id="modal-video" width="1280" height="780" controls autoPlay loop muted>
          <source src="/Files/3706.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button id="close-modal-button">X</button>
      </div>
      <div className="projects-container">
        <div className="project">
          <div className="project-title">Project RPG (WIP)</div>
          <div className="project-description">
            This Project will encompass an RPG game developed via C++. (Work In Progress)
            <div className="project-buttons">
              <a href="./WIP" className="view-project-button">View Project</a>
              <a href="https://github.com/ZiadElraggal?tab=projects" className="source-code-button">Source Code</a>
            </div>
          </div>
        </div>
      </div>
      <link rel="stylesheet" href="/projectsStyle.css" />
      <ScriptProjects/>
    </div>
  );
};

export default Projects;
