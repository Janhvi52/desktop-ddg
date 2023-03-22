import React, {Component} from "react";
import {DropTarget} from "react-dnd";

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  };
}

class Target extends Component {
  render() {
    const {connectDropTarget, image} = this.props;
    console.log(image);
    const style1 ={width: "110%", height:"520px", overflow:"hidden"}
    const style2= { width: "110%", height:"500px", overflow:"hidden" , marginTop: "20px"}
    const style3= image.includes("6")?style1:style2;
    console.log(style3);
    return connectDropTarget(
      <div className="target">
        <img src={image} alt="glass" style={style3}></img>
      </div>
    );
  }
}

export default DropTarget("item", {}, collect)(Target);