import React, { Component } from "react";
import BookClub from "../assets/portfolio/BookClub.jpg";
import CrimeCheck from "../assets/portfolio/CrimeCheck.jpg";
import Pubquiz from "../assets/portfolio/Pubquiz.jpg";
import Snake from "../assets/portfolio/Snake.jpg";

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h1 className="title">Check Out Some of My Work!</h1>
        <div className="projects">
          <div className="project">
            <img alt="BookClub" src={BookClub} />
            {/* <div className="link-icon">
                      <i className="fa fa-link"></i>
                    </div> */}

            <div className="projectlinks">
              <a
                href="https://github.com/Adriancusniriuc/BookClub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>

              <a
                href="https://sei45-bookclub.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-link"></i>
              </a>
            </div>

            <div className="projectinfo">
              <p>
                - Django Stack, PostgreSQL
                <br />
                - 1 week - Team of 2<br />
                - Pair Programming <br />
                - Find or create a book club <br />
              </p>
            </div>
          </div>

          <div className="project">
            <img alt="Pub Quiz" src={Pubquiz} />

            {/* <div className="link-icon">
                      <i className="fa fa-link"></i>
                    </div> */}

            <div className="projectlinks">
              <a
                href="https://github.com/CampbellDavid/sei-project-03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>

              <a
                href="http://project-three-sei45.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-link"></i>
              </a>
            </div>

            <div className="projectinfo">
              <p>
                - MERN, NoSQL, MongoDB
                <br />
                - 1 week - Team of 4<br />
                - Build own database
                <br />- First Full Stack app
              </p>
            </div>
          </div>

          <div className="project">
            <img alt="Crime Check" src={CrimeCheck} />

            {/* <div className="link-icon">
          <i className="fa fa-link"></i>
        </div> */}

            <div className="projectlinks">
              <a
                href="https://github.com/Adriancusniriuc/Project-02-CrimeCheck"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>

              <a
                href="https://crimecheck.herokuapp.com"
                title="Crime Check"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-link"></i>
              </a>
            </div>

            <div className="projectinfo">
              <p>
                - JavaScript, Node.js, REACT, MapBox <br />
                - 2 days - Team of 3<br />- Metropolitan Police API
              </p>
            </div>
          </div>

          <div className="project">
            <img alt="Snake" src={Snake} />

            {/* <div className="link-icon">
          <i className="fa fa-link"></i>
        </div> */}

            <div className="projectlinks">
              <a
                href="https://github.com/Adriancusniriuc/project01-snake-game"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>

              <a className='icon-portfolio'
                href="https://github.com/Adriancusniriuc/project01-snake-game"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-link"></i>
              </a>
            </div>

            <div className="projectinfo">
              <p>
                - JS, Html 5, CSS
                <br />
                - 7 days - Individual
                <br />
                - Game logic
                <br />- Steep learning curve for Vanilla JavaScript
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Portfolio;

