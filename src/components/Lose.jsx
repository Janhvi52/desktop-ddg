import React, { Component} from "react";
import "./Win.css";

class Win extends Component {
  buttonClick=()=>{
    localStorage.setItem("attempts",3);
    window.location.href="./App";
  };
render(){
  
  return (
    <div className="mainn">
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
        <br />
        <br />
        <br />
      </div>
      <div className="back">
        <h3>
          WELL, THAT COULD HAVE BEEN A DRINK.
          <br /> BUT DEFINETELY NOT AN
        </h3>
        <br />
        <div className="ap">
        <h1>AMERICAN PRIDE HIGHBALL</h1>
        </div>
        
        <br />

          <button onClick={this.buttonClick}>TRY POURING AGAIN</button>
        
      </div>
    </div>
  );
};
}
export default Win;
