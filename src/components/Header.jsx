import React, { useEffect } from "react";
import TypeWriter from "./TypeWriter";
import { motion } from "framer-motion";
import ScrollReveal from "scrollreveal";
import ScrollEffect from "./ScrollEffect";

function Header() {
  var options = {
    duration: 1000,
    delay: 200,
    origin: "bottom",
    distance: "20px",
    easing: "ease-out",
    reset: false,
  };

  return (
    <section id="Header">
      <ScrollEffect className=".heading-container" options={options} />
      <div className="heading-container">
        <h1 className="title ">
          Hi, <br />
        </h1>
        <h1 className="title">
          I'm <span className="name">Sachin</span> <br />
        </h1>
        <div className="type-writer">
          <TypeWriter />
        </div>
        <button className="btn btn-primary btn-lg">Contact</button>
        <img className="heading-img" src="images/ChicagoPic.jpg" alt="" />
        <div className="social-wrapper">
          <a
            href="https://www.linkedin.com/in/sachin-kathiresan-67463a1a2/"
            className="social-link"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin-in fa-1x"></i>
          </a>
          <a
            href="https://github.com/SachinKath"
            className="social-link"
            target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
