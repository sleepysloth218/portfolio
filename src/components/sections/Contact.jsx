import React from "react";
import "../../App.css";
import "./Contact.css";
import { Email, Phone } from "@mui/icons-material";

export default class Contact extends React.Component {
  render() {
    return (
      <div className="Contact" id="Contact">
        <h2>Contact</h2>
        <div className="contact-buttons">
          <div className="contact-button">
            <button>
              <Email />
            </button>
            <a href="">sleepysloth218@brown.edu</a>
          </div>
          <div className="contact-button">
            <button>
              <Phone />
            </button>
            <a href="">123-456-7890</a>
          </div>
        </div>
      </div>
    );
  }
}
