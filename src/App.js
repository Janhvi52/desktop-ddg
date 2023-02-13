/* eslint-disable*/
import React, { Component, useState } from "react";
import "./App.css";
import Item from "./Item";
import Target from "./Target";
import header from "./components/bgheader.png";
import TouchBackend from "react-dnd-touch-backend";
import { DragDropContext } from "react-dnd";

const del = [];

const images = {
  1: "images/imagei.png",
  2: "images/image2.png",
  3: "images/image3.png",
  4: "images/image1.png",
  5: "images/image6.png",
  6: "images/image5.png",
  12: "images/image12.png",
  13: "images/image13.png",
  14: "images/image14.png",
  15: "images/image16.png",
  16: "images/image15.png",
  23: "images/image23.png",
  24: "images/image24.png",
  25: "images/image26.png",
  26: "images/image25.png",
  34: "images/image23.png",
  35: "images/image36.png",
  36: "images/image35.png",
  45: "images/image46.png",
  46: "images/image45.png",
  56: "images/image56.png",
  123: "images/image123.png",
  125: "images/image126.png",
  124: "images/image123.png",
  126: "images/image125.png",
  134: "images/image123.png",
  135: "images/image136.png",
  136: "images/image135.png",
  145: "images/image146.png",
  146: "images/image145.png",
  156: "images/image156.png",
  234: "images/image234.png",
  235: "images/image235.png",
  236: "images/image236.png",
  245: "images/image235.png",
  246: "images/image236.png",
  256: "images/image256.png",
  345: "images/image345.png",
  346: "images/image346.png",
  356: "images/image356.png",
  456: "images/image456.png",
  1234: "images/image124.png",
  1235: "images/image1235.png",
  1236: "images/image1236.png",
  1245: "images/image1235.png",
  1246: "images/image1236.png",
  1256: "images/image1356.png",
  1345: "images/image1235.png",
  1346: "images/image1236.png",
  1356: "images/image1356.png",
  1456: "images/image1256.png",
  2345: "images/image2345.png",
  2346: "images/image2346.png",
  2356: "images/image2356.png",
  2456: "images/image2356.png",
  3456: "images/image2356.png",

  12346: "images/image1246.png",
  12356: "images/image1256.png",
  12456: "images/image1256.png",
  13456: "images/image1256.png",
  23456: "images/image2356.png",
  123456: "images/image123456.png",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "images/bglass.png",
      items: [
        { id: 1, name: "Ice Cubes", url: "/images/icecube.png" },
        { id: 2, name: "Whisky", url: "/images/bgwhiskey.png" },
        { id: 3, name: "Mixers", url: "/images/bgcola.png" },
        { id: 4, url: "/images/bgsoda.png" },
        { id: 5, url: "images/bgorange.png" },
        { id: 6, name: "Garnishes", url: "/images/lemon.png" },
      ],
    };
  }
  data = [
    { id: 1, name: "Ice Cubes", url: "/images/icecube.png" },
    { id: 2, name: "Whisky", url: "/images/bgwhiskey.png" },
    { id: 4, url: "/images/bgsoda.png" },
    { id: 6, name: "Garnishes", url: "/images/lemon.png" },
  ];

  componentDidMount() {
    if (del.length > 0) {
      const number = parseInt(del.sort().join(""));
      console.log(number);
      if (images[number]) {
        this.setState({ image: images[number] });
      } else {
        this.setState({ image: "images/image123456.png" });
      }
      console.log(number);
      if (!localStorage.getItem("isKeySet")) {
        localStorage.setItem("attempts", 3);
        localStorage.setItem("isKeySet", "true");
      }
    } else {
      this.setState({ image: "images/bglass.png" });
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
      this.componentDidMount();
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
              style={{ display: "inline", width: "100vw", height: "100px" }}
            ></img>
          </div>
          <div className="text">
            <h3 style={{color: "whitesmoke"}}>
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
        <div className="first-one">
          <Target image={this.state.image} />
          <button onClick={this.check}>Shake</button>
        </div>
          <div className="App-intro">
            <div className="app-container">
              <div className="item-container">
                {this.state.items?.map((item, index) => (
                  <Item
                    key={item.id}
                    item={item}
                    handleDrop={(id) => {
                      this.deleteItem(id);
                    }}
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

export default DragDropContext(TouchBackend({ enableMouseEvents: true }))(App);
