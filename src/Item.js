import React, { Component } from "react";
import { DragSource } from "react-dnd";
import "./App";
import "./Item.css";

const itemSource = {
  beginDrag(props) {
    console.log("dragging");
    return props.item;
  },
  //to make elements invisible after getting dragged in
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      console.log("dragging stopped");
      return;
    }
        return props.handleDrop(props.item.id);
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

class Item extends Component {
  // constructor() {
  //   super();
  //   this.state = JSON.parse(window.localStorage.getItem("state")) || {
  //     count: 0,
  //   };
  // }
  // setState(state) {
  //   window.localStorage.setItem("state", JSON.stringify(state));
  //   super.setState(state);
  // }

  render() {
    const {isDragging,connectDragSource,item: { url, name }} = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      <div className="item" style={{ opacity }}>
        <span>
          <img src={url} width="65px"></img>
        </span>
        <div className="inside">{name}</div>
      </div>
    );
  }
}

export default DragSource("item", itemSource, collect)(Item);
