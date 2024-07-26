import React from "react";

const Footer = () => {
  // const containerStyle = {
  //   backgroundColor: "#000",
  //   width: "100%",
  //   padding: "10px 20px",
  //   boxSizing: "border-box",
  //   flexWrap: "wrap",
  //   display:'flex',alignItems:'center',justifyContent:'space-between', // Allow items to wrap on smaller screens
  // };

  const textStyle = {
    color: "#FFF",
    fontSize: "15px",
    margin: "5px 0",
    textAlign: "center",
    flex: "1 1 auto", // Allow flex items to grow and shrink
  };

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
          }
        `}
      </style>

      <div
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
              <p style={{ fontSize: "25px", fontWeight: "400", color: "#FFF",width:'72%' }}>
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
              <p style={{ color: "#FFF" }}>
                When you go to someone’s place and don’t like the décor refer
                them to us. Ideal referrals would be people the interiors of
                their homes or offices, corporate looking for gifting options
                and people who have upcoming wedding
              </p>
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
              <p style={{ fontSize: "25px", fontWeight: "400", color: "#FFF",width:'72%' }}>
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
              <p style={{ color: "#FFF" }}>
                When you go to someone’s place and don’t like the décor refer
                them to us. Ideal referrals would be people the interiors of
                their homes or offices, corporate looking for gifting options
                and people who have upcoming wedding
              </p>
            </div>
          </div>

        </div>

      </div>
      {/* ..........COPYRIGHT........ */}
      {/* <div className="footer-container" style={containerStyle}>
        <div className="" style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>

        <p className="footer-text" style={textStyle}>Copyright © 2024 BNI ATLAS All Rights Reserved.</p>
        <p className="footer-text" style={textStyle}>Design & Developed by [Your Company]</p>
        </div>
      </div> */}

      <div className="footer" style={{backgroundColor:'#000',padding:'5px',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>

        <div className="footerContent" style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'82%'}}>
        <p className="footer-text" style={{fontSize:'15px',marginTop:'15px',color:'#F3F3F3'}}>Copyright © 2024 BNI ATLAS All Rights Reserved.</p>
        <p className="footer-text" style={{fontSize:'15px',marginTop:'15px',color:'#F3F3F3'}}>Design & Developed by [Your Company]</p>
        </div>

      </div>

    </>
  );
};

export default Footer;
