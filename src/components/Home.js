import React, { useState, useEffect } from "react";
import "./../styles/Home.css";

// Slideshow image links
const images = [
  "https://wallpapercave.com/wp/wp3544754.jpg",
  "https://images.unsplash.com/photo-1507491910083-29fad9a7778e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1578426187376-19bd5aeaeaa0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRhcmslMjBhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D",
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="home">
      <div className="fullscreen-slideshow">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slideshow-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>

      <div className="content-overlay">
        <div className="company-logo">
          <div className="logo"></div>
          <span className="company-name">ArchiVision</span>
        </div>

        <div className="slogan">Innovating Spaces, Inspiring Lives</div>
      </div>
    </div>
  );
}

export default Home;
