import React from "react";
import "../App.css";
import TimelineItem from "./TimelineItem";
import "./Timeline.css";

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: undefined };
  }

  onItemClick = (item) => {
    if (this.state.expanded === item) {
      this.setState({ expanded: undefined });
    } else {
      this.setState({ expanded: item });
    }
  };

  render() {
    return (
      <div className="Timeline">
        {this.props.data.map((item) => (
          <TimelineItem
            data={item}
            expanded={this.state.expanded}
            clickHandler={this.onItemClick}
          />
        ))}
      </div>
    );
  }
}
