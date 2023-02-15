import React, { Component } from "react";
import { DragSource } from "react-dnd";
import "../App";

const itemSource = {
  beginDrag(props) {
    return props.item;
  },
  //to make elements invisible after getting dragged in
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
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
  render() {
    const {
      isDragging,
      connectDragSource,
      item: { url, name },
    } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      <div className="item" style={{ opacity }}>
        <span>
          <img src={url} alt="" width="65px"></img>
        </span>
        <div className="inside">{name}</div>
      </div>
    );
  }
}

export default DragSource("item", itemSource, collect)(Item);
