// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">ALL YOU</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./b7.jpg" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h2 className="title">NEED IS</h2>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="B6.png" alt="hero" />
          </div>
          <h1 className="title dishes_title">BIRIYANI</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
