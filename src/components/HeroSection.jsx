import React from "react";
import "../assets/css/heroSection.css";
import hero from "../assets/img/hero.jpg";



const HeroSection = () => {
  return (
      <section className="hero-section">
          
      <div className="hero-content">
        <h1>Welcome to House of MarkTech</h1>
        <p>Innovative solutions for your business</p>
        <button className="hero-button">Get Started</button>
      </div>
      <img  src={hero} alt="Hero" className="hero-image" />
    </section>
  );
};

export default HeroSection;
