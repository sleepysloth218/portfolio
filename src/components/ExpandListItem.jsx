import React from "react";
import "../App.css";
import "./ExpandListItem.css";
import { ChevronRightRounded } from "@mui/icons-material";

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
        <div className="expandlist-item-top">
          <div className="expandlist-item-header">
            <h3>{this.props.data.school}</h3>
            <h4>{this.props.data.degree}</h4>
          </div>
          <div className="expand-list-arrow">
            <ChevronRightRounded style={{ transform: "scale(2)" }} />
          </div>
        </div>
        <div className="expandlist-item-body">
          <div className="expandlist-item-info">
            <p>{this.props.data.duration}</p>
            <p>{this.props.data.major}</p>
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
