import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="contact">
          <h2 className="bigcontact">Contact</h2>

          <div className="contact-details">
            <div>         <a
                  href="https://www.linkedin.com/in/adriancusniriuc/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin"></i>
                </a></div>

            <div>    <a
                  href="http://github.com/adriancusniriuc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a></div>

            <div>   <a
                  href="mailto:cusniriuc.adrian05@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-envelope"></i>
                </a></div>

         
          </div>
        </div>

        {/* <div className="row"></div>

        <div className="text-center">
          <section className="page-section bg-light" id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="bigcontact">Contact</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="contact-section">
                    <footer>
                      <div className="row">
                        <div className="twelve columns">
                          <ul className="social-links">
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
                    </footer>
                  </div>
                </div>
              </div>
            </div> */}
        {/* </section>
        </div> */}
      </section>
    );
  }
}

export default Contact;
