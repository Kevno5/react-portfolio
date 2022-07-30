import React from "react";

function Projects() {
    return (
        <section className="page-section" id="work">
      <h2>Work</h2>
      <div className="flex-container">

        <a href="https://recordshopprojecttwo-app.herokuapp.com/" className="flex-item surf-report">
          <div>
            <h3>Inventory Management System</h3>
            
            <span>JavaScript</span>
          </div>
        </a>
        
        <a href="https://kevno5.github.io/WeatherDashboard/" className="flex-item led-wall">
          <div>
            <h3>Weather Dashboard</h3>
            <span>JavaScript</span>
          </div>
        </a>
        <a href="https://kevno5.github.io/ProjectOne/" className="flex-item react-calc">
          <div>
            <h3>Park Locator</h3>
            <span>JavaScript</span>
          </div>
        </a>

        <a href="https://github.com/Kevno5/Socialmedia-networking-API" className="flex-item pastel-puzzles">
          <div>
            <h3>Socialmedia Networking API</h3>
            <span>Full Stack</span>
          </div>
        </a>

    
        

      </div>
    </section>
    )
}

export default Projects;