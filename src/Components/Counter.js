import React from "react";
import Customers from "./Customers";
import CounterDemo from "./CounterDemo";


const Counter = () => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    gap: "10px",
    flexWrap: "wrap",
  };

  const counterStyle = {
    height: "154px",
    width: "349px",
    border: "0.5px solid #bbb",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    margin: "10px",
    position: "relative",
    boxSizing: "border-box", // Ensure padding and border are included in the element's total width and height
  };

  const buttonStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#CF2030",
    color: "white",
    cursor: "pointer",
    position: "absolute",
    bottom: "-20px",
    width: "253px",
    height: "52px",
  };

  return (
    <div>
    <div style={{ width: "100%", height: "100%" ,marginTop:'10%'}}>
      <div className="container" style={containerStyle}>
        <div className="counter" style={counterStyle}>
          <h1 className="text-dark">50 LAKHS</h1>
          <button style={buttonStyle}>Revenue Goal</button>
        </div>
        <div className="counter" style={counterStyle}>
          <h1 className="text-dark">2,50,000</h1>
          <button style={buttonStyle}>Average Deal</button>
        </div>
        <div className="counter" style={counterStyle}>
          <h1 className="text-dark">16 REF</h1>
          <button style={buttonStyle}>Number Per Month</button>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 1024px) {
          .counter {
            width: 300px;
          }
        }
        @media (max-width: 768px) {
          .counter {
            width: 250px;
          }
          .container {
            justify-content: center;
          }
        }
        @media (max-width: 480px) {
          .counter {
            width: 200px;
          }
          .button {
            width: 180px;
          }
        }
      `}</style>

    </div>
         {/* <CounterDemo /> */}
         {/* <Customers /> */}

    </div>
  );
};

export default Counter;
