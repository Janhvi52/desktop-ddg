import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import './App';
import Lose from './components/Lose'
import './Item.css'

const itemSource = {
  beginDrag(props) {
    console.log('dragging');
    return props.item;
  },
  //to make elements invisible after getting dragged in
  endDrag(props, monitor, component) {
    // var x=new Item().state.count;
 var count=0;
 var attempt=0;
    if (!monitor.didDrop()) {
      console.log('ss');
      return;
    }
   
    (props.item.id === 6 && props.item.id !== 5 && !props.item.id !== 4 && !props.item.id !== 3 && !props.item.id !== 2 && !props.item.id !== 1 )?
    count=4:((props.item.id === 1)?
    count=0:((props.item.id === 2)?count=0:((props.item.id === 4)?count=0:((props.item.id === 3)?
    attempt=1:((props.item.id === 5)?attempt=2:attempt=3)))));

  console.log(count);
    if (count===4){
      window.location.href='./Lose';
    }
    if (attempt===1){
      window.location.href='./try1left';
    }
    if (attempt===2){
      window.location.href='./try2left';
    }
    if (attempt===3){
      window.location.href='./win';
    }
    return props.handleDrop(props.item.id);
  },
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

class Item extends Component {
  constructor(){
    super();
    this.state=JSON.parse(window.localStorage.getItem('state'))||{
      count:0
    }
  }
  setState(state){
    window.localStorage.setItem('state', JSON.stringify(state));
    super.setState(state);
  }
  // endDrag(props, monitor, component) {
    
  //   var count= 0;
  //     if (!monitor.didDrop()) {
  //       console.log('ss');
  //       return;
  //     }
  //     var count=0;
  //     if (props.item.id == 1){
  //    this.setState({...this.state, count: this.state.count+1});
  //     }
  //     if (props.item.id == 2){
  //       this.setState({...this.state, count: this.state.count+1});
  //        }
  //   console.log(count);
  //     if (count==2){
  //       window.location.href='http://localhost:3000/Lose';
  //     }
  //     return props.handleDrop(props.item.id);
  //   }
  render() {
     
    const { isDragging, connectDragSource, item:{url,name} } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      <div className="item" style={{ opacity }}>
        <span><img src={url} width="65px" ></img></span>
       <div className='inside'>
       {name}
       </div>
      </div>
      
    );
  }
}

export default DragSource('item', itemSource, collect)(Item);
