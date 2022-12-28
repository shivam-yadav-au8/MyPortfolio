import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import CV from "../CV/CV";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./Main.scss";
import shivam from "../../assests/shivam.png";
class Main extends Component {
  state = {};
  render() {
    return (
      <div className="expand">
        <div className="main">
          <Navbar></Navbar>
          <div className="title">
            <h1>Hey, I'm</h1>
          </div>
          <div className="name">
            <h1>Shivam</h1>
            <div className="yu"></div>
          </div>
          <img class="my-pic" src={shivam} alt="img"></img>
          <div className="bb">
            <div className="text">
              I'm a Full Stack developer with a knack of coding.I am extremely
              driven with a clear goal to succeed and I love
              calligraphy,sketching etc.I am commited to learning and
              self-development so that I can consistently achieve better
              results.{" "}
            </div>
          </div>
          <Projects />
          <div className="boundary"></div>
        </div>
        <div className="exp-con">
          <Experience />
          <CV />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
