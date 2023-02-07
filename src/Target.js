import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import header from "./images/bglass.png";
import './Target.css';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}

// function ok(item){
//   if(item.id==1){
//     <img
//     src={header}
//     style={{ display: "inline", width: "100%" }}
//   ></img>
//   }
//   else if(item.id==2){
//     <img src='/images/bgcola.png'></img>
//   }
// }

class Target extends Component {
  state = {
    image: "images/bglass.png",
  };


  render() {
    // const { image } = this.state;
    const { connectDropTarget, hovered, item } = this.props;
    // const backgroundColor = hovered ? "wheat": '';

    return connectDropTarget(
      <div className="target" >
        <img
              src={this.state.image} style={{ display: "inline", width: "125%" }}
              
            onMouseMoveCapture={()=>{
              this.setState({
                image:"images/sobsob.gif"
              })
            }}
            
            onMouseOut={()=>{
              this.setState({
                image:"images/bglass.png"
              })
            }}
            ></img>    
            <div className='text-under-image'>
    <h6 > ESTD 1886</h6>
    <h3>ROYAL CHALLENGE</h3>
    <h2>AMERICAN</h2>
    <h2>—PRIDE™️—</h2>
</div>
       
   
        
      </div>
    )
  }
}

export default DropTarget('item', {}, collect)(Target);
