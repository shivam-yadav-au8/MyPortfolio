import React, { Component, Fragment } from "react";
import ExampleDoc from "../../assests/Resume.pdf";
import "./CV.scss";
class CV extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="cv">
          <a
            href={ExampleDoc}
            download="MyExampleDoc"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bt">Download Resume</button>
          </a>
        </div>
      </Fragment>
    );
  }
}

export default CV;
