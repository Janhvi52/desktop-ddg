import React, {Component} from "react";
import "./Tryleft1.css";
import HeaderElement from "./header";
export default class Try1left extends Component {
  render() {
    const {text} = this.props;
    return (
      <div className="main-try">
        <HeaderElement />
        <div className="header-next">
          <h3>MAKE YOURSELF AN AMERICAN PRIDE HIGHBALL.</h3>
          <h3>
            <i>GRAB A COMPLIMENTARY ONE AT THE BAR!</i>
          </h3>
          <br />
          <br />
         
            <div className="diagonal">
              <div className="message">
                <h4>{text}</h4>
                <br />
                <br />
                <a href="/App">
                  <button>
                    <b>TRY POURING AGAIN</b>
                  </button>
                </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
