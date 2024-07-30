import React from "react";
import CustomersDemo from "./CustomersDemo";

const CounterDemo = () => {
  return (
    <div>
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
          className="counter1container"
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
            {/* <p className="" style={{fontSize:'46px',fontWeight:'500',color:'#000'}}>50 LAKHS</p> */}
            <div class="col-12">
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Enter Revenue Goal"
              />
            </div>
            <button
              className="text-light"
              style={{
                backgroundColor: "#CF2030",
                padding: "10px 50px",
                border: "none",
                position: "absolute",
                top: "100%",
                transform: "translateY(-50%)",
                borderRadius: '5px'
              }}
            >
              Revenue Goal
            </button>
          </div>
        </div>

        <div
          className="counter1container"
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
            {/* <p className="" style={{ fontSize: '46px', fontWeight: '500', color: '#000' }}>2,50,000</p> */}
            <div class="col-12">
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Enter Average Deal"
              />
            </div>
            <button
              className="text-light"
              style={{
                backgroundColor: "#CF2030",
                padding: "10px 50px",
                border: "none",
                position: "absolute",
                top: "100%",
                transform: "translateY(-50%)",
                borderRadius: '5px'
              }}
            >
              Average Deal
            </button>
          </div>
        </div>

        <div
          className="counter1container"
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
            <div class="col-12">
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Enter Number Per Month"
              />
            </div>
            {/* <p className="" style={{ fontSize: '46px', fontWeight: '500', color: '#000' }}>16 REF</p> */}
            <button
              className="text-light"
              style={{
                backgroundColor: "#CF2030",
                padding: "10px 50px",
                border: "none",
                position: "absolute",
                top: "100%",
                transform: "translateY(-50%)",
                borderRadius: '5px'
              }}
            >
              Number Per Month
            </button>
          </div>
        </div>


        <style>
          {`
          @media only screen
          and (min-width : 321px)
          and (max-width: 767px) {
            .container {
              display: block;
              width: 100%;
              padding: 0 15px;
              margin-top: 5%;
              flex-direction:column;
            }
            .counter1container {
              width: 100% !important;
              margin-bottom:50px;
            }
            .counterData p {
              // display:none;
              font-size: 36px; // Adjust font size for smaller screens
            }
            .counterData button {
              // display:none;
              padding: 10px;
              font-size: 14px; // Adjust font size for button
              width: 100%; // Full-width button on mobile
              position: static; // Reset position for button
              transform: none; // Reset transform
              margin-top: 10px; // Add margin-top to ensure space between text and button
            }
          }
          `}
        </style>

      </div>
      {/* <CustomersDemo />       */}
    </div>
  );
};

export default CounterDemo;
