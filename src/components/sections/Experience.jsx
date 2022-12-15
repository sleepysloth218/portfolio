import React from "react";
import "../../App.css";
import experiences from "../../assets/experience.json";
import Timeline from "../Timeline";

export default class Experience extends React.Component {
  render() {
    return (
      <div className="Experience" id="Experience">
        <h2>Experience</h2>
        <Timeline data={experiences} />
      </div>
    );
  }
}
