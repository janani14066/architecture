import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import "./styles/App.css";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <Home />;
      case "Services":
        return <Services />;
      case "Projects":
        return <Projects />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar setActivePage={setActivePage} />
      {renderPage()}
    </div>
  );
}

export default App;