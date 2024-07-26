import React from "react";

const CounterDemo = () => {
  return (
    <div
      className="container"
      style={{
        width: "80%",
        marginTop: "5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "10px",
      }}
    >
      <div
        className="counter1"
        style={{
          backgroundColor: "#FFF",
          width: "30%",
          height: "150px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          className="counterData"
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="" style={{fontSize:'46px',fontWeight:'500',color:'#000'}}>50 LAKHS</p>
          <button
            className="text-light"
            style={{
              backgroundColor: "#CF2030",
              padding: "10px 50px",
              border: "none",
              position: "absolute",
              top: "100%",
              transform: "translateY(-50%)",
              borderRadius:'5px'
            }}
          >
            Revenue Goal
          </button>
        </div>
      </div>

      <div
        className="counter2"
        style={{
          backgroundColor: "#FFF",
          width: "30%",
          height: "150px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          className="counterData"
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="" style={{fontSize:'46px',fontWeight:'500',color:'#000'}}>2,50,000</p>
          <button
            className="text-light"
            style={{
              backgroundColor: "#CF2030",
              padding: "10px 50px",
              border: "none",
              position: "absolute",
              top: "100%",
              transform: "translateY(-50%)",
              borderRadius:'5px'
            }}
          >
            Average Deal
          </button>
        </div>
      </div>
      
      <div
        className="counter3"
        style={{
          backgroundColor: "#FFF",
          width: "30%",
          height: "150px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          className="counterData"
          style={{
            flexDirection: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p className="" style={{fontSize:'46px',fontWeight:'500',color:'#000'}}>16 REF</p>
          <button
            className="text-light"
            style={{
              backgroundColor: "#CF2030",
              padding: "10px 50px",
              border: "none",
              position: "absolute",
              top: "100%",
              transform: "translateY(-50%)",
              borderRadius:'5px'
            }}
          >
            Number Per Month
          </button>
        </div>
      </div>
   
    </div>
  );
};

export default CounterDemo;
