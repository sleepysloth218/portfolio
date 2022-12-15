import React from "react";
import "./GridItem.css";
import Popup from "./Popup";

export default class GridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup = (show) => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    this.setState({ showPopup: show });
  };

  render() {
    return (
      <div
        className="GridItem"
        onPointerDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
          this.togglePopup(true);
        }}
      >
        <div className="grid-thumbnail">
          <div className="grid-item-overlay">
            <p>{this.props.data.date}</p>
            <p>{this.props.data.description}</p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/${this.props.data.coverImg}`}
            alt=""
          />
        </div>
        <h3 className="grid-item-title">
          <span>{this.props.data.title}</span>
        </h3>

        <Popup
          togglePopup={this.togglePopup}
          shown={this.state.showPopup}
          data={this.props.data}
        />
      </div>
    );
  }
}
