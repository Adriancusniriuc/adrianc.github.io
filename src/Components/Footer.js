import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="copyright">
              <li>&copy; Adrian Cusniriuc 2020</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              {/* <i className="icon-up-open"></i> */}
              <FontAwesomeIcon icon='arrow-up'/>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
