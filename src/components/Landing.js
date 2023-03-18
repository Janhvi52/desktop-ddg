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
          const phoneNumber1 = localStorage.getItem("phoneNumber")
          localStorage.setItem("phoneNumber", phoneNumber);
          const phoneNumber2 = localStorage.getItem("phoneNumber")
          if(phoneNumber1 !== phoneNumber2 || !phoneNumber){
            localStorage.setItem("attempts", 3);
          }
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
    <div className="LandingPage">
      <div className="n4">
        <form onSubmit={submitData}>
        <div className="n6">
            <h6 className="labelForMobileNo">
              <b>PLEASE ENTER YOUR MOBILE NO.</b>
            </h6>          
            <input
            className="inputNumber"
            type="number"
            value={phoneNumber} 
            onChange={handlePhoneNumberChange} 
            maxLength="10"
            pattern="\d{9}"
            placeholder="+91 1234567890"
            required
          />
          <div className="pleaseConfirm">
            <div>
              <input type="checkbox" required/></div>
              <div>
              PLEASE CONFIRM IF YOU ARE ABOVE LEGAL <br></br> DRINKING AGE AND ACCEPT OUR TERMS AND <br></br> CONDITIONS </div>
              </div>
          </div>
          <div className="enterButton">
            <input className="button-next" type="submit" value="ENTER"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Landing;
