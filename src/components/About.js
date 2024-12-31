import React, { useEffect } from "react";
import "./../styles/About.css";

function About() {
  useEffect(() => {
    // Animation for stats counting
    const countUp = (elementId, targetValue) => {
      let currentValue = 0;
      const increment = targetValue / 100;
      const interval = setInterval(() => {
        const element = document.getElementById(elementId); // Get the element
        if (element) {
          element.innerText = Math.floor(currentValue); // Update the value
          currentValue += increment;
          if (currentValue >= targetValue) {
            element.innerText = targetValue; // Ensure exact target value
            clearInterval(interval); // Stop the interval
          }
        } else {
          console.error(`Element with ID "${elementId}" not found.`);
          clearInterval(interval); // Stop the interval if element is missing
        }
      }, 30);
    };

    // Call countUp for each stat
    countUp("experience", 20); // Years of Experience
    countUp("projects", 150); // Projects Completed
    countUp("clients", 200); // Clients Served
  }, []);


  return (
    <div className="about">
      <div className="about-content">
        <h2 className="fade-in">About Our Company</h2>
        <p className="fade-in">
          Welcome to ArchiVision, where we turn dreams into architectural masterpieces. With over 20 years of experience, we specialize in creating innovative and sustainable designs for our clients.
        </p>

        <div className="company-stats">
          <div className="stat-item fade-up">
            <h3>Experience(Yrs)</h3>
            <p id="experience">0</p>
          </div>
          <div className="stat-item fade-up">
            <h3>Projects Completed</h3>
            <p id="projects">0</p>
          </div>
          <div className="stat-item fade-up">
            <h3> Happy Clients</h3>
            <p id="clients">0</p>
          </div>
        </div>

        <h3 className="slide-in">Our CEO</h3>
        <p className="slide-in">John Doe - A visionary leader with over 20 years of experience in the field of architecture.</p>

        <h3 className="slide-in">Our Team</h3>
        <ul>
          <li className="fade-up">Jane Smith - Lead Architect</li>
          <li className="fade-up">Michael Brown - Project Manager</li>
          <li className="fade-up">Emily Johnson - Interior Designer</li>
        </ul>

        <h3 className="slide-in">Location</h3>
        <p className="fade-in">123 Dream Street, Chennai, Tamil Nadu, 456789</p>

        <h3 className="slide-in">Customer Reviews</h3>
        <p className="fade-in">"ArchiVision transformed our vision into reality. Highly recommended!" - Sarah W.</p>
        <p className="fade-in">"The best architectural firm we've ever worked with!" - Alex R.</p>

        <h3 className="slide-in">Social Proof</h3>
        <div className="social-proof">
          <div className="proof-item fade-up">
            <h4>🏆 Industry Awards</h4>
            <p>Best Architectural Firm 2023 - Global Design Awards</p>
          </div>
          <div className="proof-item fade-up">
            <h4>🌟 Media Mentions</h4>
            <p>Featured in "Top 50 Design Innovators" by DesignWorld Magazine</p>
          </div>
          <div className="proof-item fade-up">
            <h4>💼 Partnerships</h4>
            <p>Collaborated with over 50 global brands for architectural excellence</p>
          </div>
        </div>

        {/* Added new section */}
        <h3 className="slide-in">Our Global and National Rank</h3>
        <div className="ranking">
          <p className="fade-in">🌍 **Global Rank:** 15th among top architectural firms worldwide.</p>
          <p className="fade-in">🇮🇳 **National Rank:** 3rd in India for outstanding architectural designs.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
