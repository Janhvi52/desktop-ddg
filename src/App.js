/* eslint-disable*/
import React, { Component } from "react";
import "./App.css";
import Item from "./Item";
import Target from "./Target";
import header from "./components/bgheader.png";
import TouchBackend from "react-dnd-touch-backend";
import { DragDropContext } from "react-dnd";

class App extends Component {
  check = () => {
    var attempts = 0;
    if (
      this.data.length === this.state.items.length &&
      this.data.id === this.state.items.id
    )
      window.location.href = "./lose";
    else attempts--;
  };
  data = [
    { id: 1, name: "Ice Cubes", url: "/images/icecube.png" },
    { id: 2, name: "Whisky", url: "/images/bgwhiskey.png" },
    { id: 4, url: "/images/bgsoda.png" },
    { id: 6, name: "Garnishes", url: "/images/lemon.png" },
  ];
  state = {
    items: [
      { id: 1, name: "Ice Cubes", url: "/images/icecube.png" },
      { id: 2, name: "Whisky", url: "/images/bgwhiskey.png" },
      { id: 3, name: "Mixers", url: "/images/bgcola.png" },
      { id: 4, url: "/images/bgsoda.png" },
      { id: 5, url: "images/bgorange.png" },
      { id: 6, name: "Garnishes", url: "/images/lemon.png" },
    ],
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
          <h4>
            Rule⚖️: Drag and Drop the ingredients in sequence starting from top!
          </h4>
        </div>

        <div className="first">
          <Target />

          <div className="App-intro">
            <div className="app-container">
              <div className="item-container">
                {this.state.items.map((item, index) => (
                  <Item
                    key={item.id}
                    item={item}
                    handleDrop={(id) => this.deleteItem(id)}
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

export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(App);
