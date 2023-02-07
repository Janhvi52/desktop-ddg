import React, { Component } from "react";
import "./App.css";
import Item from "./Item";
import Target from "./Target";
import header from "./images/bgheader.png";
import {HTML5toTouch} from 'rdndmb-html5-to-touch';
import HTML5Backend from 'react-dnd-html5-backend';
import {TouchBackend} from 'react-dnd-touch-backend';
import {MouseTransition,TouchTransition, MultiBackend} from "react-dnd-multi-backend";
import { DragDropContext, DropTarget } from "react-dnd";
const update = require("immutability-helper");

class App extends Component {
  state = {
    items: [
      { id: 1,name:"Ice Cubes",url:"/images/icecube.png"},
      { id: 2,name:"Whisky", url: "/images/bgwhiskey.png" },
      { id: 3,name:"Mixers",url:"/images/bgcola.png"},
      { id: 4,url:"/images/bgsoda.png"},
      { id: 5,url:"images/bgorange.png"},
      { id: 6,name:"Garnishes",url:"/images/lemon.png"}
    ],
  //  backends:[
  //   {
  //     id:'html5',
  //     backend: HTML5Backend,
  //     transition: MouseTransition,
  //   },
    
  //     {
  //       id:'touch',
  //       backend: TouchBackend,
  //       options:{enableMouseEvents : true},
  //       preview:true,
  //       transition: TouchTransition,
  //     },
  //  ]
  };

    deleteItem = (id) => {
   
    this.setState((prevState) => {
     
      return {
        items: prevState.items.filter((item) => item.id !== id),
        
      };
    });
  };

  render() {
    return (
      
      <div className="App">
        <header className="header">
          <div className="head-image">
            <img
              src={header}
              style={{ display: "inline", width: "100vw", height: "100px" }}
            ></img>
          </div>
          <div className="text">
            <h3>
              To complete your Highball
              <br />
              Choose the Right
              <br />
              Whiskey, Mixer and Garnish!
            </h3>
          </div>
        </header>
        <div className="rule">  
        <h4>Rule⚖️: Drag and Drop the ingredients in sequence starting from top!</h4>
        </div>
      
        <div className="first">
          <Target/>
         
        <div className="App-intro">
      
          <div className="app-container">
            <div className="item-container">
           
              {this.state.items.map((item,index) => (
                <Item key={item.id} item={item} 
                  handleDrop={(id) => this.deleteItem(id)}
                />
                
              ))}
             
          </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);


                // items:prevState.items.filter((item.id==1 && item.id==2 && item.id==4 && item.id==6)?<Landing/>:<Win/>)