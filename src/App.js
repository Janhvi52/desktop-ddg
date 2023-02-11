/* eslint-disable*/
import React, {Component, useState} from "react";
import "./App.css";
import Item from "./Item";
import Target from "./Target";
import header from "./components/bgheader.png";
import TouchBackend from "react-dnd-touch-backend";
import {DragDropContext} from "react-dnd";

const del = [];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "images/bglass.png",
      items: [
        {id: 1, name: "Ice Cubes", url: "/images/icecube.png"},
        {id: 2, name: "Whisky", url: "/images/bgwhiskey.png"},
        {id: 3, name: "Mixers", url: "/images/bgcola.png"},
        {id: 4, url: "/images/bgsoda.png"},
        {id: 5, url: "images/bgorange.png"},
        {id: 6, name: "Garnishes", url: "/images/lemon.png"},
      ],
    };
  }
  data = [
    {id: 1, name: "Ice Cubes", url: "/images/icecube.png"},
    {id: 2, name: "Whisky", url: "/images/bgwhiskey.png"},
    {id: 4, url: "/images/bgsoda.png"},
    {id: 6, name: "Garnishes", url: "/images/lemon.png"},
  ];
  componentDidMount() {
    this.setState({image: "images/bglass.png"});
    if (!localStorage.getItem("isKeySet")) {
      localStorage.setItem("attempts", 3);
      localStorage.setItem("isKeySet", "true");
    }
  }
  check = () => {
    var combo =
      del.includes(this.data[0].id) &&
      del.includes(this.data[1].id) &&
      del.includes(this.data[2].id) &&
      del.includes(this.data[3].id);

    if (del.length === 4 && combo) {
      localStorage.setItem("attempts", 0);
      window.location.href = "./lose";
    } else {
      var totalAttempts = localStorage.getItem("attempts");
      localStorage.setItem("attempts", totalAttempts - 1);
      var remainingAttempts = localStorage.getItem("attempts");
      if (remainingAttempts > 0) {
        window.location.href = `./try${remainingAttempts}left`;
      } else window.location.href = `./win`;
    }
  };

  deleteItem = (id) => {
    this.setState((prevState) => {
      del.push(id);
      console.log(del);
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
              style={{display: "inline", width: "100vw", height: "100px"}}
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
          <h4>
            Rule⚖️: Drag and Drop the ingredients in sequence starting from top!
          </h4>
        </div>

        <div className="first">
          <Target image={this.state.image} />

          <div className="App-intro">
            <div className="app-container">
              <div className="item-container">
                {this.state.items?.map((item, index) => (
                  <Item
                    key={item.id}
                    item={item}
                    handleDrop={(id) => {
                      this.deleteItem(id);
                      this.componentDidMount();
                    }}
                  />
                ))}
                <button onClick={this.check}>Shake</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(TouchBackend({enableMouseEvents: true}))(App);
