import React from "react";
import HeaderElement from "./header";
import "./Lose.css";

class Lose extends React.Component {
  handlemath() {
    document.getElementById("mid").innerHTML = ("" + Math.random()).substring(
      2,
      8
    );
  }
  render() {
    return (
      <>
        <div className="my">
          <HeaderElement />
          <div className="header-top">
          <div className="grab-text-WIN">
             CONGRATULATIONS   
             </div>
          </div>
          <div className="next">
            <div className="bottom1">
             <div className="loseImage">
              <img
                src="images/bglassf11.png"
                alt="oops"
              />
            </div>
              <div className="text2">
              <h4>
                ON WINNING A COMPLIMENTARY HIGHBALL! SHARE YOUR UNIQUE CODE WITH
                SERVER &
              </h4>
              <br />
              <h2>
                <b>GRAB YOUR FIRST HIGHBALL</b>
              </h2>
              </div>
            </div>
            <div className="right">
              <h5>Your Unique Code is</h5>
              <div id="mid">
                <button onClick={this.handlemath}>Click Here!</button>
              </div>
              <div className="endd">
                <h6>
                  A maximun of one complimentary Highball drink per particioant
                  can be availed through this offer
                </h6>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Lose;
