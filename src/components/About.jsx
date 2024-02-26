import React from "react";
import ScrollEffect from "./ScrollEffect";

function About() {
  var options = {
    duration: 800,
    delay: 300,
    origin: "bottom",
    distance: "50px",
    easing: "ease-out",
    reset: false,
  };

  return (
    <section id="About">
      <ScrollEffect className=".about-container" options={options} />

      <div className="about-container">
        <div className="headingWrapper">
          <h1 className="heading-title">About</h1>
        </div>
        <div className="row">
          <div className="polaroid col-lg-4 col-sm-12">
            <div className="image-container">
              <img class="about-img" src="images/SachinPic.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card-body">
              <h1 style={{ fontSize: "25px", marginBottom: "30px" }}>Hi!</h1>
              <p style={{ fontWeight: "350" }}>
                I'm Sachin Kathiresan and I'm a computer science student at
                Georgia Tech! Currently, I am looking for a software engineering
                internship for the Fall or Summer of 2024. My interests are in
                fullstack web development and machine learning. I like to attend
                Hackathons and work on personal projects. In my free time, I
                like to watch football and I am a DIE-HARD Cowboys Fan. I also
                enjoy playing spikeball in the Tech fields.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
