/* eslint-disable*/
import React, {Component} from "react";
import "./App.css";
import Item from "./components/Item";
import Target from "./components/Target";
import header from "./assets/headerr.png";
import image2 from "./assets/image2.png";
import image123456 from "./assets/image123456.png";
import TouchBackend from "react-dnd-touch-backend";
import {DragDropContext} from "react-dnd";

const del = [];
const styles = [];

const images = {
  1: "images/image1.png",
  2: image2,
  3: "images/image3.png",
  4: "images/image4.png",
  5: "images/image5.png",
  6: "images/image6.png",
  12: "images/image12.png",
  13: "images/image13.png",
  14: "images/image14.png",
  15: "images/image15.png",
  16: "images/image16.png",
  23: "images/image23.png",
  24: "images/image24.png",
  25: "images/image25.png",
  26: "images/image26.png",
  35: "images/image35.png",
  36: "images/image36.png",
  45: "images/image45.png",
  46: "images/image46.png",
  123: "images/image123.png",
  125: "images/image125.png",
  124: "images/image124.png",
  126: "images/image126.png",
  135: "images/image135.png",
  136: "images/image136.png",
  145: "images/image146.png",
  146: "images/image145.png",
  235: "images/image235.png",
  236: "images/image236.png",
  245: "images/image245.png",
  246: "images/image246.png",
  1235: "images/image1235.png",
  1236: "images/image1236.png",
  1245: "images/image1245.png",
  1246: "images/image1246.png",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "images/glass.png",
      items: [
        {id: 1, name: "Ice Cubes", url: "/images/icecube.png"},
        {id: 2, name: "Whisky", url: "/images/bgwhiskey.png"},
        {id: 3, url: "/images/bgcola.png"},
        {id: 4, name: "Mixers", url: "/images/bgsoda.png"},
        {id: 5, url: "images/bgorange.png"},
        {id: 6, name: "Garnishes", url: "/images/lemon.png"},
      ],
      isLoaded: false,
    };
  }
  data = [
    {id: 1, name: "Ice Cubes", url: "/images/icecube.png"},
    {id: 2, name: "Whisky", url: "/images/bgwhiskey.png"},
    {id: 4, url: "/images/bgsoda.png"},
    {id: 6, name: "Garnishes", url: "/images/lemon.png"},
  ];

  componentDidMount() {
    setTimeout(() => {
      if (!this.state.isLoaded) {
        alert("Please Add Ice cubes");
        this.setState({isLoaded: true});
      }
    },4000);
    if (del.length > 0) {
      const number = parseInt(del.sort().join(""));
      if (images[number]) {
        this.setState({image: images[number]}, () => {
          if (!localStorage.getItem("isKeySet")) {
            localStorage.setItem("attempts", 3);
            localStorage.setItem("isKeySet", "true");
          }
        });
      } else {
        this.setState({image: image123456});
      }
    } else {
      this.setState({image: "images/glass.png"});
    }
  }

  check = () => {
    var combo =
      del.includes(this.data[0].id) &&
      del.includes(this.data[1].id) &&
      del.includes(this.data[2].id) &&
      del.includes(this.data[3].id);

    var attemptt = localStorage.getItem("attempts");
    if (del.length === 4 && combo && attemptt > 0) {
      localStorage.setItem("attempts", 0);
      window.location.href = "./win";
    } else {
      var totalAttempts = localStorage.getItem("attempts");
      localStorage.setItem("attempts", totalAttempts - 1);
      var remainingAttempts = localStorage.getItem("attempts");
      if (remainingAttempts > 0) {
        window.location.href = `./try${remainingAttempts}left`;
      } else window.location.href = `./lose`;
    }
  };

  deleteItem = (id) => {
    this.setState((prevState) => {
      del.push(id);
      this.componentDidMount();
      if (id === 1) {
        setTimeout(() => {
          alert("Now add 30ml RC American Pride Whiskey");
        }, 3000);
      }
      if (id === 2) {
        setTimeout(() => {
          alert("Add one correct mixer for your Highball: Soda or Cola");
        }, 3000);
      }
      if (id === 3 || id === 4) {
        setTimeout(() => {
          alert("Add the correct garnish to complete your highball");
        }, 3000);
          styles[3] = {opacity: 0.3, pointerEvents: "none"};
          styles[4] = {opacity: 0.3, pointerEvents: "none"};
      }
      if (del.length === 4) {
        setTimeout(() => {
          alert("To complete your highball please Stir & Submit");
        }, 3000);
      }
      styles[id] = {opacity: 0.3, pointerEvents: "none"};
      if (id === 5 || id === 6) {
        styles[5] = {opacity: 0.3, pointerEvents: "none"};
        styles[6] = {opacity: 0.3, pointerEvents: "none"};
      }
      return {
        items: prevState.items.filter((item) => item.id == item.id),
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
              style={{display: "inline", width: "100vw", height: "100%"}}
            ></img>
          </div>
        </header>
        <div className="first">
          <div className="first-one">
            <Target image={this.state.image} />
            <button onClick={this.check}>Stir & Submit</button>
          </div>
          <div className="App-intro">
            <div className="app-container">
              <div className="item-container">
                {this.state.items?.map((item, index) => (
                  <Item
                    styles={styles}
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

export default DragDropContext(TouchBackend({enableMouseEvents: true}))(App);
