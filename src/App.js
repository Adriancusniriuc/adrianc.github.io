import React, { Component } from "react";
import "./App.css";
// import "~bootstrap/scss/bootstrap";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from './Components/About';
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Interests from "./Components/Interests";


import { library } from '@fortawesome/fontawesome-svg-core'
import {faArrowUp, faArrowCircleDown} from '@fortawesome/free-solid-svg-icons'
 
library.add(faArrowUp,faArrowCircleDown)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About/>
        <Resume />
        <Portfolio />
        <Interests />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
