import React from 'react'
import { render } from 'react-dom';
import './Lose.css';
// function gfg(){
//     var minm=10000;
//     var maxm=99999;
//     document.getElementsByClassName('mid'.innerHTML=(""+Math.random()).substring(2,8));
// }
class Lose extends React.Component {
    handlemath(){
        document.getElementById('mid').innerHTML=(""+Math.random()).substring(2,8);
    }
    render(){
  return (
    <div className='my'>
        <h4>BLENDED WITH <span> AMERICAN BOURBON</span> WHISKEY</h4>
    <br/>
<div className='header-top'>
    <h2><i>JOIN THE</i></h2>
    <h1>AMERICAN<br/>PRIDE <h6><i>#CHALLENGEACCEPTED</i></h6></h1>
    <h1><i>CONGRATULATIONS</i></h1>
    </div>
    <div className='next'>
        <div className='left'>
            <img src='images/bglassf1.png' alt='oops'></img>
        </div>
        <div className='right'>
            <h4>ON WINNING<br/>A COMPLIMENTARY HIGHBALL!</h4>
                <h4>SHARE YOUR UNIQUE CODE WITH SERVER &</h4>
                <br/><h2><b>GRAB YOUR FIRST HIGHBALL</b></h2>
            <br/>
            <h5>Your Unique Code is</h5>
            
            <div id='mid'><button onClick={this.handlemath}>Click Here!</button></div>
            
            <h4>A maximun of one complimentary Highball drink per particioant can be availed through this offer</h4>  
        </div>

    </div>
    </div>
  )
}
}

export default Lose