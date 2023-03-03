import {React, useState } from "react";
import "./Landing.css";

const Landing = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const submitData = (event) => {
    event.preventDefault();
    fetch('https://nbrm3t7gl1.execute-api.us-east-1.amazonaws.com/prod/registerUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
        productId: '679'
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'SUCCESS') {
          console.log('User registered successfully!');
          localStorage.setItem("phoneNumber", phoneNumber)
          window.location.href="./App";

        } else {
          console.error(data.message);
        }
      })
      .catch(error => {
        console.error('Error registering user:', error);
      });
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  }

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
      <div className="n6">
        <form onSubmit={submitData}>
          <label>
            <h4>
              <b>Please enter your mobile no.</b>
            </h4>
          </label>
          <input
            className="inputNumber"
            type="number"
            value={phoneNumber} 
            onChange={handlePhoneNumberChange} 
            size="2"
            maxLength="10"
            pattern="\d{9}"
            placeholder="+91 1234567890"
            required
          />
          <div className="pleaseConfirm">
            <span>
              <input type="checkbox" required />
            </span>
            PLEASE CONFIRM IF YOU ARE
            <br /> ABOVE LEGAL DRINKING
          </div>
          <div>
            <input className="button-next" type="submit" value="NEXT"></input>
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
