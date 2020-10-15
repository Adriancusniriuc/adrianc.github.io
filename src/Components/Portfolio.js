import React, { Component } from "react";
import BookClub from "../assets/portfolio/BookClub.jpg";
import CrimeCheck from "../assets/portfolio/CrimeCheck.jpg";
import Pubquiz from "../assets/portfolio/Pubquiz.jpg";
import Snake from "../assets/portfolio/Snake.jpg";
import Cuplu from "../assets/portfolio/Cuplu1.jpg";
import Provocarea from "../assets/portfolio/Provocarea.jpg";
import Zanora from "../assets/portfolio/Zanora.jpg";
import ecommerce from "../assets/portfolio/ecommerce.jpg";

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <h1 className="title">Check Out Some of My Work!</h1>
        <div className="projects">
          <div className="project">
            <img alt="Project04" src={ecommerce} />

            <div className="projectlinks">
              <a
                className="icon-portfolio"
                href="https://github.com/Adriancusniriuc/commerce/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>

              <a
                className="icon-portfolio"
                href="   https://adriancusniriuc.github.io/commerce/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-link"></i>
              </a>
            </div>

            <div className="projectinfo">
              <p>
                -React,JavaScript, Redux <br />
                -Firebase and Stripe
                <br />- Personal project for development of React Skills <br />
                -Website + deployment in progress(GITUB REPO AVAILABLE)
              </p>
            </div>
          </div>

          <div className="project">
            <img alt="Project03" src={Zanora} />

            <div className="projectlinks">
              <a
                className="icon-portfolio"
                href="https://github.com/Adriancusniriuc/lordsofzanora/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>

              <a
                className="icon-portfolio"
                href="   https://adriancusniriuc.github.io/lordsofzanora/
                "
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-link"></i>
              </a>
            </div>

            <div className="projectinfo">
              <p>
                -React, Html 5, CSS, JavaScript
                <br />- Website built for a board game. <br />
              </p>
            </div>
          </div>

          <div className="project">
            <img alt="Project02" src={Provocarea} />

            <div className="projectlinks">
              <a
                className="icon-portfolio"
                href="https://github.com/Adriancusniriuc/vf-03-provocare/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>

              <a
                className="icon-portfolio"
                href="   https://adriancusniriuc.github.io/vf-03-provocare/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-link"></i>
              </a>
            </div>

            <div className="projectinfo">
              <p>
                -React, Html 5, CSS
                <br />- Complex static website with emphasis on CSS3
              </p>
            </div>
          </div>

          <div className="project">
            <img alt="Project01" src={Cuplu} />

            <div className="projectlinks">
              <a
                className="icon-portfolio"
                href="https://github.com/Adriancusniriuc/vf-01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>

              <a
                className="icon-portfolio"
                href="https://adriancusniriuc.github.io/vf-01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-link"></i>
              </a>
            </div>

            <div className="projectinfo">
              <p>
                - Html 5, CSS
                <br />- Basic one pager website for a motivational speaker
              </p>
            </div>
          </div>

          <div className="project">
            <img alt="BookClub" src={BookClub} />
            {/* <div className="link-icon">
                      <i className="fa fa-link"></i>
                    </div> */}

            <div className="projectlinks">
              <a
                className="icon-portfolio"
                href="https://github.com/Adriancusniriuc/BookClub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>

              <a
                className="icon-portfolio"
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
                className="icon-portfolio"
                href="https://github.com/CampbellDavid/sei-project-03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>

              <a
                className="icon-portfolio"
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
                className="icon-portfolio"
                href="https://github.com/Adriancusniriuc/Project-02-CrimeCheck"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>

              <a
                className="icon-portfolio"
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
                className="icon-portfolio"
                href="https://github.com/Adriancusniriuc/project01-snake-game"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>

              <a
                className="icon-portfolio"
                href="https://adriancusniriuc.github.io/project01-snake-game/"
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
