import React from "react";
import GridItem from "./GridItem";
import "./Grid.css";

export default class Grid extends React.Component {
  render() {
    return (
      <div className="Grid">
        {this.props.data.map((project) => (
          <GridItem data={project} />
        ))}
      </div>
    );
  }
}
