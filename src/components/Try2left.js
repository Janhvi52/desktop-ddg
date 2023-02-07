import React, { Component } from 'react'
import './Tryleft1.css'


export default class Try1left extends Component {
  render() {
    return (
        <div className='mainn'>
        <h4>BLENDED WITH <span> AMERICAN BOURBON</span> WHISKEY</h4>
     
        <div className='header-top'>
            <h2><i>JOIN THE</i></h2>
            <h1>AMERICAN<br/>PRIDE <h6><i>#CHALLENGEACCEPTED</i></h6></h1>
        </div>
        <div className='header-next'>
            <h3>MAKE YOURSELF AN AMERICAN PRIDE HIGHBALL.</h3>
            <h3><i>GRAB A COMPLIMENTARY ONE AT THE BAR!</i></h3>
            <br/>
            <br/>
            <h5>Opps 😟 Something went wrong!</h5>
            <div className='message'>
              <h4>Oh! This is your last attempt to win yourself a complementary RC American Pride Highball</h4>
              <br/>
              <span>Please try again <a href="/App"><i class="fa-sharp fa-solid fa-rotate-right"></i></a></span>
            </div>
        </div>
        <img src='images/bglassf1.png' alt='oops'></img>
    
      {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-rotate-right"/> */}
        </div>
    )
  }
}
