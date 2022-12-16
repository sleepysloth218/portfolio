import React from "react";
import "../App.css";
import "./ExpandListItem.css";

export default class ExpandListItem extends React.Component {
  render() {
    return (
      <div
        className={`ExpandListItem ${
          this.props.expanded === this ? "expanded" : "flattened"
        }`}
        onPointerDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
          this.props.clickHandler(this);
        }}
      >
        <div className="expandlist-item-header">
          <h3>{this.props.data.school}</h3>
          <h4>{this.props.data.degree}</h4>
        </div>
        <div className="expandlist-item-body">
          <div className="expandlist-item-info">
            <p>{this.props.data.duration}</p>
            <p>{this.props.data.major}</p>
            <p>{this.props.data.gpa}</p>
          </div>
          {this.props.data.description && (
            <div className="expandlist-item-description">
              <p>{this.props.data.description}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
