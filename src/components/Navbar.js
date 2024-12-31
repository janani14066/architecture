import React from "react";
import "./../styles/Navbar.css";

function Navbar({ setActivePage }) {
  return (
    <div className="navbar">
      <button onClick={() => setActivePage("Home")}>Home</button>
      <button onClick={() => setActivePage("Services")}>Services</button>
      <button onClick={() => setActivePage("Projects")}>Projects</button>
      <button onClick={() => setActivePage("About")}>About</button>
      <button onClick={() => setActivePage("Contact")}>Contact</button>
    </div>
  );
}

export default Navbar;
