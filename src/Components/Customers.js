import React from "react";
import '../App.css';
import checkIMG from "../Assets/Vector.png";
import Referrals from "./Referrals";
import CustomersDemo from "./CustomersDemo";

const Customers = () => {

  const lineStyle = {
    border: "0",
    height: "3px",
    background: "#ddd",
    marginTop: "10px",
    marginBottom: "30px",
    width: "100%",
  };

  return (
    <div>

    
    {/* <div className="customers-container">
      <div className="container"> */}
        
        {/* .........MAIN TITLE......... */}
        {/* <div className="title">
          <h4>LAST 10 CUSTOMERS & CONTACT SPHERE WORK SHEET</h4>
        </div> */}
          

        {/* ....................Last 10 Customers / Acquaintances................. */}
        {/* <div className="content-container"> */}
          {/* ........CARD 1......... */}
          {/* <div className="card customers-container-card" style={{backgroundColor:'#F4F4F4',borderRadius:'10px'}}>
            <p className="card-title" >Last 10 Customers / Acquaintances</p>
            <hr style={lineStyle} />
            <div className="main-data">
              <div className="list">
                {["Brakes India, Bharuch", "Klockner Desma, Ahmedabad", "Trutzschler India, Ahmedabad", "L&T Switchgear, Baroda", "Inductotherm India, Ahmedabad"].map((item, index) => (
                  <div key={index} className="list-item">
                    <img src={checkIMG} alt="check" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className="list">
                {["Brakes India, Bharuch", "Klockner Desma, Ahmedabad", "Trutzschler India, Ahmedabad", "L&T Switchgear, Baroda", "Inductotherm India, Ahmedabad"].map((item, index) => (
                  <div key={index} className="list-item">
                    <img src={checkIMG} alt="check" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          {/* .......CARD 2........... */}
          {/* <div className="card contact-sphere-card" style={{backgroundColor:'#F4F4F4',borderRadius:'10px'}}>
            <p className="card-title">Contact Sphere - My Gives</p>
            <hr style={lineStyle} />
            <div className="main-data">
              <div className="list">
                {["Reputed Builders", "Architects", "Consultants", "Sports Complex manufacturers", "Govt Contractors"].map((item, index) => (
                  <div key={index} className="list-item">
                    <img src={checkIMG} alt="check" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className="list">
                {["Interior Designers", "Industrial Suppliers", "Purchase head of MNCs", "Automobile Showroom owners", "GYM owners"].map((item, index) => (
                  <div key={index} className="list-item">
                    <img src={checkIMG} alt="check" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        {/* </div> */}
      {/* </div> */}

    {/* </div> */}

      <CustomersDemo />            

      <Referrals />
    </div>
  );
};

export default Customers;
