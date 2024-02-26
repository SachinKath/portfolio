import React from "react";
import { motion } from "framer-motion";
import ScrollEffect from "./ScrollEffect";
const hover = {
  scale: 1.2,
};
function Skills() {
  var options = {
    duration: 1000,
    delay: 200,
    origin: "bottom",
    distance: "20px",
    easing: "ease-out",
    reset: false,
  };
  return (
    <section id="Skills">
      <ScrollEffect className=".skills" options={options} />
      <div class="skills">
        <div className="headingWrapper">
          <h1 className="heading-title">Skills</h1>
        </div>
        <div className="skills-container">
          <div className="skill">
            <motion.div whileHover={hover} className="motion">
              <i
                style={{ color: "#748e63", fontSize: "35px" }}
                class="fa-brands fa-html5 fa-2x"
              ></i>
              <p style={{ color: "black", margin: "10px", fontSize: "20px" }}>
                HTML 5
              </p>
            </motion.div>
          </div>

          <div className="skill">
            <motion.div whileHover={hover} className="motion">
              <i
                style={{ color: "#748e63", fontSize: "35px" }}
                class="fa-brands fa-react fa-2x"
              ></i>
              <p style={{ color: "black", margin: "10px", fontSize: "20px" }}>
                React
              </p>
            </motion.div>
          </div>

          <div className="skill">
            <motion.div whileHover={hover} className="motion">
              <i
                style={{ color: "#748e63", fontSize: "35px" }}
                class="fa-brands fa-node-js fa-2x"
              ></i>
              <p style={{ color: "black", margin: "10px", fontSize: "20px" }}>
                NodeJS
              </p>
            </motion.div>
          </div>
          <div className="skill">
            <motion.div whileHover={hover} className="motion">
              <i
                style={{ color: "#748e63", fontSize: "35px" }}
                class="fa-brands fa-js fa-2x"
              ></i>
              <p style={{ color: "black", margin: "10px", fontSize: "20px" }}>
                Javascript
              </p>
            </motion.div>
          </div>

          <div className="skill">
            <motion.div whileHover={hover} className="motion">
              <i
                style={{ color: "#748e63", fontSize: "35px" }}
                class="fa-brands fa-css3-alt fa-2x"
              ></i>
              <p style={{ color: "black", margin: "10px", fontSize: "20px" }}>
                CSS
              </p>
            </motion.div>
          </div>

          <div className="skill">
            <motion.div whileHover={hover} className="motion">
              <i
                style={{ color: "#748e63", fontSize: "35px" }}
                class="fa-brands fa-java fa-2x"
              ></i>
              <p style={{ color: "black", margin: "10px", fontSize: "20px" }}>
                Java
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
