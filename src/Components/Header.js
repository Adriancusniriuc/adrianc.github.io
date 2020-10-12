import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li className="current">
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#interests">
                Interests
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner " id="one">
          <div className="banner-text">
            <div className="container" id="container">
              <svg
                height="200"
                stroke="#fff"
                strokeWidth="3"
                className="text-line"
                width="100%"
              >
                <text
                  x="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  y="70%"
                >
                  Adrian Cusniriuc
                </text>
              </svg>
            </div>
            <div className="charachteristics">
              Full Stack Developer - Whisky-lover - Traveller - Bookworm
            </div>
            <ul className="social">
              {/* {networks} */}
              <li>
                <a
                  href="https://www.linkedin.com/in/adriancusniriuc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="http://github.com/adriancusniriuc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:cusniriuc.adrian05@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            {/* <i className="icon-down-circle"></i> */}
            <FontAwesomeIcon icon="arrow-circle-down" />
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
