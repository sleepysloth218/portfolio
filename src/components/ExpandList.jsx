import React from "react";
import "../App.css";
import ExpandListItem from "./ExpandListItem";

export default class ExpandList extends React.Component {
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
      <div className="ExpandList">
        {this.props.data.map((item, id) => (
          <ExpandListItem
            data={item}
            key={id}
            expanded={this.state.expanded}
            clickHandler={this.onItemClick}
          />
        ))}
      </div>
    );
  }
}
