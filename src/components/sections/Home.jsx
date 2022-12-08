import React from "react";
import "../../App.css";
import "./Home.css";
import { GitHub, LinkedIn, Email, DownloadRounded } from "@mui/icons-material";

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home" id="Home">
        <div className="profile-img">
          <img
            src={`${process.env.PUBLIC_URL}/assets/profile.jpeg`}
            alt="profile pic"
          />
        </div>
        <div className="home-info">
          <div className="home-text">
            <h1>Hi! I'm Firstname</h1>
            <p>
              computer science student, research assistant, and teaching
              assistant at Brown University
            </p>
          </div>
          <button>
            <DownloadRounded /> download resume
          </button>
          <div className="home-links">
            <a href="">
              <GitHub />
            </a>{" "}
            <a href="">
              <LinkedIn />
            </a>{" "}
            <a href="">
              <Email />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
