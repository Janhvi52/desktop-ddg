import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="mainn">
      <div className="upper-part">
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
            PRIDE
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
        </div>
      </div>
              {/* <div className="n4">
          <div className="n6">
            <form action="/App">
              <label>
                <h4>
                  <b>Please enter your mobile no.</b>
                </h4>
              </label>
              <input
                type="number"
                size="2"
                maxLength="10"
                pattern="\d{9}"
                placeholder="+91 1234567890"
                required
              />

              <h3>
                <span>
                  <input type="checkbox" required />
                </span>{" "}
                PLEASE CONFIRM <br />
                IF YOU ARE ABOVE LEGAL DRINKING
              </h3>

              <div className="b">
                <input type="submit" value="NEXT"></input>
              </div>
            </form>
          </div>
        </div> */}
      <div className="image-text">
        <img
          className="landingImage"
          src="images/landing1.png"
          alt="oops!"
        ></img>
      </div>
    </div>
  );
};

export default Landing;
