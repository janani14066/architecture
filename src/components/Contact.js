import React, { useState } from "react";
import "./../styles/Contact.css";

function Contact() {
  // Initialize with an empty string instead of null to avoid issues
  const [loginType, setLoginType] = useState(""); 

  const handleLogoClick = (type) => {
    setLoginType(type); // Set the loginType when a social icon is clicked
  };

  const handleCloseLogin = () => {
    setLoginType(""); // Reset loginType to an empty string to hide the login form
  };

  return (
    <div className="contact">
      <h2>CONTACT US</h2>
      <div className="contact-info">
        <p>
          Phone: <strong>+123 456 7890</strong>
        </p>
        <p>
          Email: <strong>contact@architecture.com</strong>
        </p>
        <p>
          Website:{" "}
          <a
            href="https://www.architecture.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.architecture.com
          </a>
        </p>

        <div className="branches">
          <h3>Our Branches</h3>
          <ul>
            <li>
              <strong>New York:</strong> 456 Modern Ave, Innovation City, NY
            </li>
            <li>
              <strong>Los Angeles:</strong> 789 Sunset Blvd, LA, California
            </li>
            <li>
              <strong>London:</strong> 101 King's Road, Central London, UK
            </li>
            <li>
              <strong>Dubai:</strong> 202 Sky Towers, Downtown Dubai, UAE
            </li>
          </ul>
        </div>

        <div className="social-links">
          <button
            className="social-icon fb"
            aria-label="Login via Facebook"
            onClick={() => handleLogoClick("Facebook")}
            title="Login via Facebook"
          ></button>
          <button
            className="social-icon insta"
            aria-label="Login via Instagram"
            onClick={() => handleLogoClick("Instagram")}
            title="Login via Instagram"
          ></button>
          <button
            className="social-icon wp"
            aria-label="Login via WhatsApp"
            onClick={() => handleLogoClick("WhatsApp")}
            title="Login via WhatsApp"
          ></button>
        </div>
      </div>

      <section className="highlights">
        <h3>Why Choose Us?</h3>
        <p>
          ArchiVision is renowned for delivering innovative and sustainable
          designs. We aim to transform spaces into timeless masterpieces.
        </p>
        <ul>
          <li>Over 20 years of excellence in architectural design.</li>
          <li>Award-winning projects globally.</li>
          <li>Customer-centric approach with a focus on quality and creativity.</li>
          <li>Eco-friendly and sustainable architectural solutions.</li>
        </ul>
      </section>

      {/* Render login form if loginType is set to a valid string */}
      {loginType && (
        <div className="login-page">
          <h3>{loginType} Login</h3>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
          <button
            className="back-button"
            onClick={handleCloseLogin}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Contact;

