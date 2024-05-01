// eslint-disable-next-line no-unused-vars
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  const handleVisitClick = () => {
    // Open the desired URL in a new tab
    window.open("https://maps.app.goo.gl/EMGaxia4pGLCmNni6");
  };

  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we are serious about is food.</p>
            </div>
            <p className="mid">
              Sri Saravana is where tradition meets taste. Indulge in our
              exquisite selection of South Indian dishes, meticulously crafted
              with the finest ingredients and authentic spices. Our passion for
              culinary excellence and commitment to quality ensure an
              unforgettable dining experience for every guest. Whether you are
              craving crispy dosas, flavorful biryanis, or mouthwatering
              desserts, Sri Saravana is the place to be. Join us and embark on
              a culinary journey that celebrates the rich heritage of South
              Indian cuisine.
            </p>
            {/* Attach onClick handler to open URL */}
            <button onClick={handleVisitClick}>
              VISIT <span><HiOutlineArrowRight /></span>
            </button>
          </div>
          <div className="banner">
            <img src="b3.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
