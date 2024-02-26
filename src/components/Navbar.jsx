import React from "react";

import "../styles.css";
function Navbar() {
  return (
    <div className="navbar-container">
      <ul className="link-container">
        <li>
          <a className="navbar-links" href="#Home">
            Home
          </a>
        </li>
        <li>
          <a className="navbar-links" href="#About">
            About
          </a>
        </li>
        <li>
          <a className="navbar-links" href="">
            Skills
          </a>
        </li>
        <li>
          <a className="navbar-links" href="">
            Projects
          </a>
        </li>
        <li>
          <a className="navbar-links" href="">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
