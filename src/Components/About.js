import React, { Component } from "react";
import profilepic from "../assets/profilepic.jpg";

class About extends Component {
  render() {
    return (
      <section id="about">
  
            <div className='profilePicture'>
            <img
              className="profile-pic"
              src={profilepic}
              alt="Adrian Cusniriuc profile pic"
            />
            </div>

 
          <div className="text-about-me">
            <h2>About Me</h2>
            <p>
              Feeling the need for a change, I decided to get out of my comfort
              zone and try something I always wanted to but was afraid of doing:
              coding! From basic YouTube tutorials to an online bootcamp and all
              the way to General Assembly in London. It has been quite an
              intense twelve-week journey and it feels like just a first step in
              a much more exciting life adventure.
            </p>
            <p>
              As a recent graduate of General Assembly’s Software Engineering
              Immersive Course, I can't wait to apply my new skills and
              knowledge across web development and the latest programming
              practices. This is an exciting and bold new venture for me, and I
              am determined to make a success of it.
            </p>
          </div>
        {/* </div> */}
      </section>
    );
  }
}

export default About;
