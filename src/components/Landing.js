import React from "react";
import "./Landing.css";
import HeaderElement from "./header";
const Landing = () => {
  return (
    <div className="mainn">
      <div className="upper-part">
        <div className="header-top">
          <HeaderElement />
        </div>
        <div className="header-next">
          <h3>MAKE YOURSELF AN AMERICAN PRIDE HIGHBALL.</h3>
          <div className="grab-text">GRAB A COMPLIMENTARY ONE AT THE BAR!</div>
        </div>
      </div>
      <div className="n6">
        <form action="./App">
          <label>
            <h6>
              <b>PLEASE ENTER YOUR MOBILE NO.</b>
            </h6>
          </label>
          <input
            className="inputNumber"
            type="number"
            size="2"
            maxLength="10"
            pattern="\d{9}"
            placeholder="+91 1234567890"
            required
          />
          <div className="pleaseConfirm">
            <span>
              <input type="checkbox" required color="red" />
              PLEASE CONFIRM IF YOU ARE ABOVE 
              <br/>LEGAL DRINKING AGE
            </span>
          </div>
          <div>
            <input className="button-next" type="submit" value="ENTER"></input>
          </div>
        </form>
      </div>
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
