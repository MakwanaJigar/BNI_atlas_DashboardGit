import React from "react";
import Vector from "../Assets/Vector.png";
import RefDemo from "./RefDemo";

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
      <div className="container-fluid">
        <div className="container" style={{ width: "80%" }}>
          {/* ............MAIN TITLE........... */}

          <div
            className="title"
            style={{
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "40px",
              borderRadius: "10px",
              width: '100%'
            }}
          >
            <p style={{ color: "#fff", fontSize: "25px", fontWeight: "500" }}>
              LAST 10 CUSTOMERS & CONTCT SPHERE WORK SHEET
            </p>
          </div>

          <div className="row g-2" style={{ marginTop: '3%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* ...........Last 10 Customers / Acquaintances........ */}

            {/* .....CARD1..... */}
            <div
              className="col-md-5 "
              style={{
                height: "50%",
                backgroundColor: "#F4F4F4",
                borderRadius: "10px",
                padding: "18px",
                border: "1px solid #ddd",
                // width: "49%",
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

                <form class="row g-3">
                  <div class="col-md-6">

                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="Enter Customers Name"
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="Enter Customers Name"
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="Enter Customers Name"
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="Enter Customers Name"
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="Enter Customers Name"
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="Enter Customers Name"
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="Enter Customers Name"
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="Enter Customers Name"
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="Enter Customers Name"
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="Enter Customers Name"
                    />
                  </div>

                  <div class="col-12">
                    <button type="submit" class="btn btn-outline-danger">
                      Submit
                    </button>
                  </div>
                </form>

              </div>
            </div>

            {/* .....CARD2..... */}
            <div
              className="col-md-5 "
              style={{
                height: "50%",
                backgroundColor: "#F4F4F4",
                borderRadius: "10px",
                padding: "18px",
                border: "1px solid #ddd",
                // width: "49%",
              }}
            >
              <div className="cardTitle">
                <h4 className="text-danger">Contact Sphere - My Gives</h4>
                <hr style={lineStyle} />
              </div>
              <form class="row g-3">
                <div class="col-md-6">

                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Enter Contact Sphere"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Enter Contact Sphere"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Enter Contact Sphere"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Enter Contact Sphere"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Enter Contact Sphere"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Enter Contact Sphere"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Enter Contact Sphere"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Enter Contact Sphere"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Enter Contact Sphere"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Enter Contact Sphere"
                  />
                </div>

                <div class="col-12">
                  <button type="submit" class="btn btn-outline-danger">
                    Submit
                  </button>
                </div>
              </form>
            </div>

          </div>

        </div>
      </div>

      <style>
        {`
          .col-md-5 {
            width: 48%;
          }
          
         
          @media (max-width: 767px) {

            .title{
              width: 100% !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
            }
            .title p{
                      font-size: medium !important;
        text-align: center;
            }


            .col-md-5 {
              width: 100% !important; 
              margin-bottom: 10px; 
            }
            .col-md-5 {
              width: 100%;
              margin-bottom: 20px;
            }
            .cardData {
              flex-direction: column;
              gap: 10px;
            }
            .datalist1, .datalist2 {
              width: 100%; 
              margin-bottom: 10px; 
            }
          
            .datalist2 {
              margin-bottom: 0; 
            }
          }
        `}
      </style>

      <RefDemo />

    </>
  );
};

export default CustomersDemo;
