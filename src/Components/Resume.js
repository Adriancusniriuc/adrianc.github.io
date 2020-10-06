import React, { Component } from "react";
class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <div className="resume">
          <div className="skills-header">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="skills-grid">
            <div className="skills">
              <div>
                <i className="devicon-javascript-plain fa-5x"></i>
                <p className="skill-text">JavaScript</p>
              </div>
              <div>
                <i className="devicon-express-original fa-5x"></i>
                <p className="skill-text">Express.js</p>
              </div>
              <div>
                <i className="devicon-python-plain fa-5x"></i>
                <p className="skill-text">Python</p>
              </div>
              <div>
                <i className="devicon-webpack-plain fa-5x"></i>
                <p className="skill-text">Webpack</p>
              </div>
              <div>
                <i className="devicon-visualstudio-plain fa-5x"></i>
                <p className="skill-text">VS Code</p>
              </div>
            </div>

            <div className="skills">
              <div>
                <i className="devicon-react-original fa-5x"></i>
                <p className="skill-text">React.js</p>
              </div>
              <div>
                <ul className="skill">
                  <i className="devicon-mocha-plain fa-5x"></i>
                  <p className="skill-text">Mocha</p>
                </ul>
              </div>
              <div>
                <ul className="skill">
                  <i className="devicon-slack-plain fa-5x"></i>
                  <p className="skill-text">Slack</p>
                </ul>
              </div>
              <div>
                <i className="devicon-trello-plain fa-5x"></i>
                <p className="skill-text">Trello</p>
              </div>
              <div>
                <i className="devicon-github-plain fa-5x"></i>
                <p className="skill-text">GitHub</p>
              </div>
            </div>

            <div className="skills">
              <div>
                <i className="devicon-nodejs-plain fa-5x"></i>
                <p className="skill-text">Node.js</p>
              </div>
              <div>
                <ul className="skill">
                  <i className="devicon-django-plain fa-5x"></i>
                  <p className="skill-text">Django</p>
                </ul>
              </div>
              <div>
                <ul className="skill">
                  <i className="devicon-heroku-original fa-5x"></i>
                  <p className="skill-text">Heroku</p>
                </ul>
              </div>
              <div>
                <i className="devicon-babel-plain fa-5x"></i>
                <p className="skill-text">Babel</p>
              </div>
              <div>
                <i className="devicon-postgresql-plain fa-5x"></i>
                <p className="skill-text">PostgreSQL</p>
              </div>
            </div>

            <div className="skills">
              <div>
                <i className="devicon-html5-plain fa-5x"></i>
                <p className="skill-text">HTML5</p>
              </div>
              <div>
                <ul className="skill">
                  <i className="devicon-git-plain fa-5x"></i>
                  <p className="skill-text">Git</p>
                </ul>
              </div>
              <div>
                <ul className="skill">
                  <i className="devicon-css3-plain fa-5x"></i>
                  <p className="skill-text">CSS3</p>
                </ul>
              </div>
              <div>
                <i className="devicon-sass-original fa-5x"></i>
                <p className="skill-text">Sass</p>
              </div>
              <div>
                <i className="devicon-mongodb-plain fa-5x"></i>
                <p className="skill-text">mongoDB</p>
              </div>
            </div>
          </div>
        </div>

        <div className="experience">
          <div className="skills-header">
            <h1>
              <span>Experience</span>
            </h1>
          </div>

          <div className="experience1">

          <div className="experience-element">
              <h3>Visual-FIx</h3>
              <p className="info">
                Frontend intern • June 2020 - August
                2020
              </p>
              <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>


            <div className="experience-element">
              <h3>General Assembly London</h3>
              <p className="info">
                Software Engineering Immersive Student • December 2019 - March
                2020
              </p>
              <p className="description">
                Utilised a hands-on approach to practise key concepts of
                software engineering over an array of languages and frameworks.
                With more than 500 hours of training over twelve weeks, this
                program has helped me develop multiple full-stack applications
                that can be found within my portfolio.
              </p>
            </div>

            <div className="experience-element">
              <h3>The Wharf</h3>
              <p className="info">
                Assistant Bar Manager • November 2012 - November 2018
              </p>
              <p className="description">
                Manage the whisky and rum selection, organise whisky tastings
                and in charge of the social media advertising.
              </p>
            </div>

            <div className="experience-element">
              <h3>University College of Northern Denmark</h3>
              <p className="info">
                Bachelor in International Hospitality Management • September
                2012 - Jan 2017
              </p>
             
              <p className="description">
                The Hospitality degree comprised modules on economy, business
                management, HR and customer service. These modules have
                definitely taught me skills like teamwork, problem solving
                whilst under pressure/time constraints and how to meet client
                needs, which are easily transferable to the tech industry. Most
                importantly, this course has shown me the importance of
                efficient communication skills and the importance of being
                proactive.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="row experience">
       
          <div className="nine columns main-col">
            <div>
              <h3>General Assembly London</h3>
              <p className="info">
                Software Engineering Immersive Student • December 2019 - March
                2020
              </p>
              <p className="description">
                Utilised a hands-on approach to practise key concepts of
                software engineering over an array of languages and frameworks.
                With more than 500 hours of training over twelve weeks, this
                program has helped me develop multiple full-stack applications
                that can be found within my portfolio.
              </p>
            </div> */}

        {/* <div>
              <h3>The Wharf</h3>
              <p className="info">
                Assistant Bar Manager • November 2012 - November 2018
              </p>
              <p className="description">
                Manage the whisky and rum selection, organise whisky tastings
                and in charge of the social media advertising.
              </p>

              <h3>University College of Northern Denmark</h3>
              <p className="info">
                Bachelor in International Hospitality Management • September
                2012 - Jan 2017
              </p>
              <p className="info">Bachelor in International Hospitality Management<span>&bull;</span> <em className="date">Apr 2015 - Nov 2019</em></p>
              <p className="description">
                The Hospitality degree comprised modules on economy, business
                management, HR and customer service. These modules have
                definitely taught me skills like teamwork, problem solving
                whilst under pressure/time constraints and how to meet client
                needs, which are easily transferable to the tech industry. Most
                importantly, this course has shown me the importance of
                efficient communication skills and the importance of being
                proactive.
              </p>
            </div>
          </div>
        </div> */}

        <hr />
      </section>
    );
  }
}
export default Resume;
