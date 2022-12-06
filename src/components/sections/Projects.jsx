import React from "react";
import "../../App.css";
import Grid from "../Grid";
import projectData from "../../assets/projects.json";

export default class Projects extends React.Component {
  render() {
    return (
      <div className="Projects" id="Projects">
        <h2>Projects</h2>
        <Grid data={projectData} />
      </div>
    );
  }
}
