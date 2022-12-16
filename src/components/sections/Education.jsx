import React from "react";
import "../../App.css";
import educationData from "../../assets/education.json";
import ExpandList from "../ExpandList";

export default class Education extends React.Component {
  render() {
    return (
      <div className="Education" id="Education">
        <h2>Education</h2>
        <ExpandList data={educationData} />
      </div>
    );
  }
}
