import React from "react";
import Vector from "../Assets/Vector.png";
import RefDemo from "./RefDemo";
import Line from '../Assets/Line.png';

const CustomersDemo = () => {
  const lineStyle = {
    border: "0",
    height: "2px",
    background: "#ddd",
    marginTop: "10px",
    marginBottom: "30px",
    width: "100%",
  };

  return (
    <>
      <div className="container" style={{ width: "80%" }}>
        <div
          className="titleText"
          style={{
            backgroundColor: "#CF2030",
            width: "100%",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom:'3.5%'
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "#FFF",
              fontSize: "25px",
              fontWeight: "500",
              marginTop:'15px'
            }}
          >
            LAST 10 CUSTOMERS & CONTACT SPHERE WORK SHEET
          </p>
        </div>

        <div
          className="row"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: 5,
          }}
        >
          {/* .....CARD1..... */}
          <div
            className="col-md-5"
            style={{
              height: "50%",
              backgroundColor: "#F4F4F4",
              borderRadius: "10px",
              padding: "18px",
              border: "1px solid #ddd",
              width: "48%",
            }}
          >
            <div className="cardTitle">
              <h4 className="text-danger">Last 10 Customers / Acquaintances</h4>
              {/* <img src={Line} style={{height:'3px',width:'100%'}} alt="" /> */}
              <hr style={lineStyle} />
            </div>

            <div
              className="cardData"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div className="datalist1">
                <div className="1">
                  <div style={{ display: "flex", gap: 5 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      Brakes India, Bharuch
                    </p>
                  </div>
                </div>
                <div className="2">
                  <div style={{ display: "flex", gap: 5 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                       Klockner Desma, Ahmedabad
                    </p>
                  </div>
                </div>
                <div className="3">
                  <div style={{ display: "flex", gap: 5 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      Trutzschler India, Ahmedabad
                    </p>
                  </div>
                </div>
                <div className="4">
                  <div style={{ display: "flex", gap: 5 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      L&T Switchgear, Baroda
                    </p>
                  </div>
                </div>
                <div className="5">
                  <div style={{ display: "flex", gap: 5 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      Inductotherm India, Ahmedabad
                    </p>
                  </div>
                </div>
              </div>
              <div className="datalist2">
                <div className="1">
                  <div style={{ display: "flex", gap: 5 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      MRS Bearings, Surendranagar
                    </p>
                  </div>
                </div>
                <div className="2">
                  <div style={{ display: "flex", gap: 5 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      Hilife Machines, Ahmedabad
                    </p>
                  </div>
                </div>
                <div className="3">
                  <div style={{ display: "flex", gap: 5 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      NMTG Mechtrans India
                    </p>
                  </div>
                </div>
                <div className="4">
                  <div style={{ display: "flex", gap: 5 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      Windsor Machines, Chhatral
                    </p>
                  </div>
                </div>
                <div className="5">
                  <div style={{ display: "flex", gap: 5 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      Tirth Agro Private Limited
                    </p>
                  </div>
                </div>
              </div>

              <div className="dataist2"></div>
            </div>
          </div>

          {/* .....CARD2..... */}
          <div
            className="col-md-5"
            style={{
              height: "50%",
              backgroundColor: "#F4F4F4",
              borderRadius: "10px",
              padding: "18px",
              border: "1px solid #ddd",
              width: "48%",
            }}
          >
            <div className="cardTitle">
              <h4 className="text-danger">Contact Sphere - My Gives</h4>
              <hr style={lineStyle} />
            </div>

            <div
              className="cardData"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div className="datalist1">
                <div className="1">
                  <div style={{ display: "flex", gap: 10 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      Reputed Builders
                    </p>
                  </div>
                </div>
                <div className="2">
                  <div style={{ display: "flex", gap: 10 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      Architects
                    </p>
                  </div>
                </div>
                <div className="3">
                  <div style={{ display: "flex", gap: 10 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      Consultants
                    </p>
                  </div>
                </div>
                <div className="4">
                  <div style={{ display: "flex", gap: 10 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      Sports Complex manufacturers
                    </p>
                  </div>
                </div>
                <div className="5">
                  <div style={{ display: "flex", gap: 10 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      Govt Contractors
                    </p>
                  </div>
                </div>
              </div>

              <div className="datalist2">
                <div className="1">
                  <div style={{ display: "flex", gap: 5 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      Interior Designers
                    </p>
                  </div>
                </div>
                <div className="2">
                  <div style={{ display: "flex", gap: 5 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      Industrial Suppliers
                    </p>
                  </div>
                </div>
                <div className="3">
                  <div style={{ display: "flex", gap: 5 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      Purchase head of MNCs
                    </p>
                  </div>
                </div>
                <div className="4">
                  <div style={{ display: "flex", gap: 5 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      Automobile Showroom owners
                    </p>
                  </div>
                </div>
                <div className="5">
                  <div style={{ display: "flex", gap: 5 }}>
                    <img
                      src={Vector}
                      alt=""
                      style={{ width: "25px", height: "25px" }}
                    />
                    <p className="" style={{ color: "#625F5F" }}>
                      GYM owners
                    </p>
                  </div>
                </div>
              </div>

              <div className="dataist2"></div>
            </div>
          </div>
        </div>
      </div>
      <RefDemo />
    </>
  );
};

export default CustomersDemo;
