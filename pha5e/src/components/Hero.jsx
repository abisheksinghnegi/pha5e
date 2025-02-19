import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="image-container">
        <div id='img1' className="image image1"></div>
        <div id='img2' className="image image2"></div>
        <div id='img3' className="image image3"></div>
        <div id='img4' className="image image4"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-heading">
          <span className="animated-text">IMAGINING</span>
        </h1>
        <h1 className="hero-heading">
          <span className="animated-text">UNIQUE</span>
        </h1>
        <h1 className="hero-heading">
          <span className="animated-text">AND DIGITAL</span>
        </h1>
        <h1 className="hero-heading">
          <span className="animated-text">EXPERIENCES</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
