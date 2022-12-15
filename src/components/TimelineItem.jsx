import React from "react";
import "../App.css";
import "./TimelineItem.css";

export default class TimelineItem extends React.Component {
  render() {
    return (
      <div
        className={`TimelineItem ${
          this.props.expanded === this ? "expanded" : "flattened"
        }`}
      >
        <div className="timeline-item-content">
          <div
            className="timeline-content-wrapper"
            onPointerDown={(e) => {
              e.stopPropagation();
              e.preventDefault();
              this.props.clickHandler(this);
            }}
          >
            <div className="timeline-item-header">
              <div className="timeline-item-title">
                <h3>{this.props.data.company}</h3>
                <p>{this.props.data.location}</p>
              </div>
              <div className="timeline-item-subtitle">
                <h4>{this.props.data.position}</h4>
                <p>{this.props.data.duration}</p>
              </div>
            </div>
            <div className="timeline-item-body">
              <ul>
                {this.props.data.description.map((bullet) => (
                  <li>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>

          <span className="timeline-circle" />
        </div>
      </div>
    );
  }
}
