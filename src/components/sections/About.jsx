/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "../../App.css";

export default class About extends React.Component {
  render() {
    return (
      <div className="About" id="About">
        <h2>About</h2>
        <p>
          <b>Hi! I'm Firstname Lastname.</b> I'm a third-year computer science
          student at Brown University with focuses in Visual Computing and
          Artificial Intelligence/Machine Learning.
        </p>
        <p>
          At Brown, I am currently a research assistant for the{" "}
          <a href="" target="_blank">
            _____ research group
          </a>{" "}
          and a teaching assistant for{" "}
          <a href="" target="_blank">
            _____
          </a>
          , Brown's undergraduate ______ course.
        </p>
        <p>
          My interests include computer graphics, web development, and UI/UX
          design. Outside of class you can find me playing the violin, drawing,
          and losing at board games.
        </p>
      </div>
    );
  }
}
