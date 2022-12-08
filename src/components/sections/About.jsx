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
          At Brown, I am currently a lead research assistant of the{" "}
          <a
            href="https://brown-dash.github.io/Dash-Documentation/"
            target="_blank"
          >
            Dash project group
          </a>{" "}
          and a teaching assistant for{" "}
          <a href="http://cs1230.graphics/" target="_blank">
            CSCI 1230
          </a>
          , Brown's undergraduate computer graphics course.
        </p>
        <p>
          My interests include computer graphics, UI/UX design, and animation.
          Outside of class you can find me playing the violin, drawing, and
          losing at board games.
        </p>
      </div>
    );
  }
}
