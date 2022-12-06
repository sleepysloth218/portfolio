import React from "react";
import "./NavBar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className={`NavBar ${this.props.shadow && "shadow"}`}>
        <div className="navbar-wrapper">
          <ul className="navbar-content">
            {this.props.sections.map((section) => (
              <li className="nav-item">
                <a
                  href={`#${section}`}
                  className={this.props.active === section && "active"}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
