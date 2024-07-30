import React from "react";

const Footer = () => {

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .footer-container {
              flex-direction: column;
              align-items: center; 
            }
            
            .footer-text {
              margin-bottom: 10px;
            }
            .Footer{
              margin-bottom: 45%;
            }
          }
        `}
      </style>

      <div
      className="Footer"
        style={{
          width: "100%",
          marginTop: "5%",
          background: "linear-gradient(45deg, #940E1A, #CF2030)",
        }}
      // className="container-fluid"
      >
        {/* ..........MAIN CONTENT......... */}
        <div className="container" style={{ padding: "20px" }}>

          <div
            className="list1"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className=""
              style={{
                width: "40%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <p style={{ fontSize: "25px", fontWeight: "400", color: "#FFF", width: '72%' }}>
                Easiest Way to Introduce Me
              </p>
              <hr
                style={{
                  width: "2px",
                  height: "127px",
                  backgroundColor: "#fff",
                  margin: "0 20px",
                }}
              />

            </div>

            <div
              className=""
              style={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // padding: "20px",
              }}
            >
              <form class="row g-3 mt-2" >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Easiest Way to Introduce Me !!"
                  rows="5"
                  cols='90'
                ></textarea>
                <div class="col-12 mb-2">
                  <button type="submit" class="btn btn-outline-light">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          <hr
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#fff",
              margin: "0 20px"
            }}
          />

          <div
            className="list2"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className=""
              style={{
                width: "40%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ fontSize: "25px", fontWeight: "400", color: "#FFF", width: '72%' }}>
                Questions to ask or things to listen for
              </p>
              <hr
                style={{
                  width: "2px",
                  height: "126px",
                  backgroundColor: "#fff",
                  margin: "0 20px",
                }}
              />
            </div>
            <div
              className=""
              style={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // padding: "20px",
              }}
            >
              <form class="row g-3 mt-2" >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Questions to ask or things to listen for !!"
                  rows="5"
                  cols='90'
                  style={{}}
                ></textarea>
                <div class="col-12">
                  <button type="submit" class="btn btn-outline-light">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
      {/* ..........COPYRIGHT........ */}

      <div className="footer" style={{ backgroundColor: '#000', padding: '5px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        <div className="footerContent" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '82%' }}>
          <p className="footer-text" style={{ fontSize: '15px', marginTop: '15px', color: '#F3F3F3' }}>Copyright © 2024 BNI ATLAS All Rights Reserved.</p>
          <p className="footer-text" style={{ fontSize: '15px', marginTop: '15px', color: '#F3F3F3' }}>Designed & Developed by Replete </p>
        </div>

      </div>


    </>
  );
};

export default Footer;
