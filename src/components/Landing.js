import React from 'react';
import './Landing.css';

const Landing = () => {
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
        
        </div>
        <div className='image-text'>
            <div className='image-sec'>
            <img src='images/landing1.png' alt='oops!' width={"128%"} height="392px"></img>
            </div>
            <div className='text-sec'>
               <a href='./Nextland'><button>ENTER</button></a>
            </div>
        </div>
        </div>
       
  )
}

export default Landing;