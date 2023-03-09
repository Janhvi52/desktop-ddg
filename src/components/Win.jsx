import React, { useState } from "react";
import "./Lose.css";


const Lose = () => {
  const [uniqueCode, setUniqueCode] = useState("");
  const phoneNumber = localStorage.getItem("phoneNumber")

  const getUniqueCode = async () => {
    try {
      const uniqueCodeResponse = await fetch(
        "https://nbrm3t7gl1.execute-api.us-east-1.amazonaws.com/prod/getUniqueCode",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber,
            productId: "679",
          }),
        });

      const uniqueCodeData = await uniqueCodeResponse.json();
      if (uniqueCodeData.status === "SUCCESS") {
        console.log("Unique Code generated");
        setUniqueCode(uniqueCodeData.result.uniqueCode);
      } else {
        console.log("User already participated");
        setUniqueCode("User already participated");
        console.error(uniqueCodeData.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="my">
          <div className="right">
            <div id="mid">
              {uniqueCode ? ( 
                <h2>{uniqueCode}<br></br></h2>
              ) : (
                <button onClick={getUniqueCode}>Click Here!</button>
              )}
            </div>
           
          </div>
    
      </div>
    </>
  );
};

export default Lose;
