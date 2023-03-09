import React, { Component } from "react";
import { DragSource } from "react-dnd";
import "../App";

const itemSource = {
  beginDrag(props) {
    return props.item;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    const { id } = props.item;
    props.handleDrop(id);
    component.setState((prevState) => ({
      ...prevState,
      isDropped: {
        ...prevState.isDropped,
        [id]: true,
      },
    }));
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
  constructor(props) {
    super(props);
    this.state = {
      isDropped : Array(6).fill(false),
    };
  }

  render() {
    const {
      isDragging,
      connectDragSource,
      item: { url, name, id },
    } = this.props;
    const { isDropped } = this.state;
    const opacity = isDragging ? 0.3 : 1;
    const marginBottom = name ? "30px" : "0px";
    const display = name ? "inline" : "";
    const style = {
      opacity: isDropped[id] ? 0.3 : opacity,
      pointerEvents: isDropped[id] ? "none" : "auto",
      display,
    };
    

    return connectDragSource(
      <div className="item" style={style}>
        <span>
          <img src={url} alt="image" width="65px"></img>
        </span>
        <div className="inside" style={{ marginBottom }}>
          {name}
        </div>
      </div>
    );
  }
}

export default DragSource("item", itemSource, collect)(Item);