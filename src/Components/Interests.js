import React, { Component } from "react";
import Whisky from "../assets/hobbies/whisky.jpg";
import hitch from "../assets/hobbies/hitch1.jpeg";
import book from "../assets/hobbies/book.png";
import bike from "../assets/hobbies/bike.png";

class Interests extends Component {
  render() {
    return (
      <section id="interests">
        <h1 className="title">Guilty Pleasures</h1>

        <div className="interests">
          <div className="interest">
            <img alt="Travelling" src={hitch} />
            <h3 className="hobby">Travelling</h3>
            <p className="hobby">
              Hitchhiking in South America? <br />
              Please and thank you!
            </p>
          </div>
          <div className="interest">
            <img alt="Whisky" src={Whisky} />
            <h3 className="hobby">Whisky</h3>
            <p className="hobby">
              I collect and invest in whisky <br />
              but don't hesitate to pour me one.
            </p>
          </div>
          <div className="interest">
            <img alt="Book" src={book} />
            <h3 className="hobby">Reading</h3>
            <p className="hobby">
              Favorite writers:
              <br />
              - Erich Maria Remarque
              <br />
              - Len Deighton
              <br />- Stieg Larsson
            </p>
          </div>
          <div className="interest">
            <img alt="Whisky" src={bike} />
            <h3 className="hobby">Biking</h3>
            <p className="hobby">
              I cycled from Denmark <br />
              to Romania in 14 days. <br />
              Never again!
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Interests;
//testing
