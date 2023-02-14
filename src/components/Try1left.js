import React, { Component } from "react";
import "./Tryleft1.css";
export default class Try1left extends Component {
  render() {
    return (
      <div className="main-try">
        <h4>
          BLENDED WITH <span> AMERICAN BOURBON</span> WHISKEY
        </h4>

        <div className="header-top">
          <h2>
            <i>JOIN THE</i>
          </h2>
          <h1>
            AMERICAN
            <br />
            PRIDE{" "}
            <h6>
              <i>#CHALLENGEACCEPTED</i>
            </h6>
          </h1>
        </div>
        <div className="header-next">
          <h3>MAKE YOURSELF AN AMERICAN PRIDE HIGHBALL.</h3>
          <h3>
            <i>GRAB A COMPLIMENTARY ONE AT THE BAR!</i>
          </h3>
          <br />
          <br />
   
          <div className="diagonal">
                    <div className="message">
            <h4>
              Oh! This is your last attempt to win yourself a RC
              American Pride Highball
            </h4>
            <br />
           
             <br/>
              <a href="/App">
                <button><b>TRY POURING AGAIN</b></button>
              </a>
          
          </div>
          </div>
        </div>
      </div>
    );
  }
}
