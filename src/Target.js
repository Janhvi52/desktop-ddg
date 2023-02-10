import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import "./Target.css";

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  };
}

class Target extends Component {
  state = {
    image: "images/bglass.png",
  };

  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div className="target">
        <img
          src={this.state.image}
          style={{ display: "inline", width: "110%" }}
        ></img>

        <div className="text-under-image">
          <h6> ESTD 1886</h6>
          <h3>ROYAL CHALLENGE</h3>
          <h2>AMERICAN</h2>
          <h2>—PRIDE™️—</h2>
        </div>
      </div>
    );
  }
}

export default DropTarget("item", {}, collect)(Target);
