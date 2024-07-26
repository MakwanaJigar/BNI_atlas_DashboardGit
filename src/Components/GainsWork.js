import React from "react";
import Counter from "./Counter";
import HomeBG from "../Assets/ProductsPage.png";
import Customers from "./Customers";
import CounterDemo from "./CounterDemo";

const GainsWork = () => {
  // ......................counter css

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // gap: "10px",
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

  const lineStyle = {
    border: "0",
    height: "5px",
    background: "#CF2030",
    marginTop: "-15px",
    marginBottom: "30px",
    width: "15%",
  };

  const backgroundStyle = {
    // backgroundImage: `url(${HomeBG})`,
    backgroundImage: "linear-gradient(#FFFFFF, #DBDBDB)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: -1,
    marginTop: "5%",
    height: "100%",
    paddingBottom: "5%",
  };

  return (
    <>
    <div className="container-fluid" style={backgroundStyle}>
      <div className="container" style={{width:'80%'}}>
        <div
          className="title"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
          }}
        >
          <h1 className="" style={{ color: "#CF2030" }}>
            GAINS
            <span className="text-dark"> Worksheet</span>
          </h1>
        </div>

        {/* ........HORIZONTAL LINE......... */}
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="horizontalline" style={lineStyle}>

          </div>
          {/* <hr style={lineStyle} /> */}
        </div>

        <div className="table rounded-5">
          <table
            style={{
              width: "100%",
              borderSpacing: "0 5px",
              border: "1px solid #ddd",
            }}
          >
            <tr>
              <td
                className=""
                style={{
                  color: "#CF2030",
                  fontWeight: "500",
                  fontSize: "16px",
                  background: "transparent",
                  paddingLeft: "20px",
                  width:'200px'
                }}
              >
                Goals (Short Range){" "}
              </td>
              <td
                className=""
                style={{
                  paddingLeft: "23px",
                  paddingRight: "23px",
                  color: "#CF2030",
                  background: "transparent",
                }}
              >
                :
              </td>
              <td style={{ background: "transparent" }}>
                <ul style={{ marginTop: "10px" }}>
                  <li style={{ fontSize: "15px", fontWeight: "400" }}>
                    To become No.1 Supplier of my segment in Gujarat.
                  </li>
                  <li style={{ fontSize: "15px", fontWeight: "400" }}>
                    Double the turnover by 2026.
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td
                className=""
                style={{
                  color: "#CF2030",
                  fontWeight: "500",
                  fontSize: "16px",
                  background: "transparent",
                  paddingLeft: "20px",
                }}
              >
                Accomplishments
              </td>
              <td
                className=""
                style={{
                  paddingLeft: "23px",
                  paddingRight: "23px",
                  color: "#CF2030",
                  background: "transparent",
                }}
              >
                :
              </td>
              <td style={{ background: "transparent" }}>
                <ul style={{ marginTop: "10px" }}>
                  <li style={{ fontSize: "15px" }}>
                    Elite student in schools & College. Studied from reputed
                    Schools of Ahmedabad. Completed BE from GEC, Gandhinagar &
                    MBA from B K School of Management.
                  </li>
                  <li style={{ fontSize: "15px" }}>
                    Performed important roles in various departments like
                    Technical, Quality, Training, Marketing & HR in my
                    professional career.
                  </li>
                  <li style={{ fontSize: "15px" }}>
                    Visited Denmark, Belgium & France customers to learn &
                    implement advance technology & processes in my Organization.
                  </li>
                  <li style={{ fontSize: "15px" }}>
                    Working with reputed Automobile manufactures & Tier I-II
                    suppliers for last 7 years.
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td
                className=""
                style={{
                  color: "#CF2030",
                  fontWeight: "500",
                  fontSize: "16px",
                  background: "transparent",
                  paddingLeft: "20px",
                }}
              >
                Interests
              </td>
              <td
                className=""
                style={{
                  paddingLeft: "23px",
                  paddingRight: "23px",
                  color: "#CF2030",
                  background: "transparent",
                }}
              >
                :
              </td>
              <td style={{ background: "transparent" }}>
                <ul style={{ marginTop: "10px" }}>
                  <li style={{ fontSize: "15px" }}>
                    Playing Cricket, Travelling New places, Listening Retro
                    Music
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td
                className=""
                style={{
                  color: "#CF2030",
                  fontWeight: "500",
                  fontSize: "16px",
                  background: "transparent",
                  paddingLeft: "20px",
                }}
              >
                Networks
              </td>
              <td
                className=""
                style={{
                  paddingLeft: "23px",
                  paddingRight: "23px",
                  color: "#CF2030",
                  background: "transparent",
                }}
              >
                :
              </td>
              <td style={{ background: "transparent" }}>
                <ul style={{ marginTop: "10px" }}>
                  <li style={{ fontSize: "15px" }}>
                    Customers in all major cities of India, Alumni of St.
                    Xavier’s Loyola, GEC, Gandhinagar & B K School of
                    Management, Channel partner of USA & UK based MNCs
                  </li>
                </ul>
              </td>
            </tr>

            <tr>
              <td
                className=""
                style={{
                  color: "#CF2030",
                  fontWeight: "500",
                  fontSize: "16px",
                  background: "transparent",
                  paddingLeft: "20px",
                }}
              >
                Skills
              </td>
              <td
                className=""
                style={{
                  paddingLeft: "23px",
                  paddingRight: "23px",
                  color: "#CF2030",
                  background: "transparent",
                  paddingLeft: "20px",
                }}
              >
                :
              </td>
              <td style={{ background: "transparent" }}>
                <ul style={{ marginTop: "10px" }}>
                  <li style={{ fontSize: "15px" }}>
                    Marketing, Negotiations, Networking
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>

        {/* ..................................COUNTER............................... */}

        {/* <div>
          <div style={{ width: "100%", height: "100%", marginTop: "5%" }}>
            <div className="container" style={containerStyle}>
              <div className="counter bg-light mb-5" style={counterStyle}>
                <h1 className="text-dark">50 LAKHS</h1>
                <button style={buttonStyle}>Revenue Goal</button>
              </div>
              <div className="counter bg-light mb-5" style={counterStyle}>
                <h1 className="text-dark">2,50,000</h1>
                <button style={buttonStyle}>Average Deal</button>
              </div>
              <div className="counter bg-light mb-5" style={counterStyle}>
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
        </div> */}

        {/* <Counter />       */}
      </div>
      <CounterDemo />        
    </div>
    <Customers />
    </>
  );
};

export default GainsWork;
