import React from "react";
import HomeBG from "../Assets/ProductsPage.png";
import VideoCard from "../Components/VideoCard";
import CardIMG from '../Assets/ProductsPage.png';

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${HomeBG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  };

  const cardStyle = {
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    border: "none",
    borderRadius: "10px", // Ensure the border radius is preserved
  };

  const cardImageStyle = {
    display: "flex",
    alignSelf: "center",
    width: "100%", // Maintain full width within its container
    height: "100%", // Maintain full height within its container
    objectFit: "cover",
    borderRadius: "10px",
  };

  const contentStyle = {
    padding: "20px",
    marginLeft: "35px", // Add margin to create the gap
  };

  const lineStyle = {
    border: "none",
    borderTop: "3px dashed #CF2030",
    margin: "20px 0",
    width: "45%",
  };

  return (
    <div className="" style={backgroundStyle}>
    <div style={{width:'100%'}}>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{
          height: "100%",
          // padding: "20px",
          marginTop: '3%',
        }}
      >
        <div
          className="row"
          style={{ width: "100%", maxWidth: "1200px", marginTop: "7.5%" }}
        >
          <div className="col-12">
            <div className="card mb-3" style={cardStyle}>
              <div className="row g-0">
                <div className="col-12 col-md-4">
                  <img
                    src={CardIMG}
                    className="img-fluid"
                    alt="Card"
                    style={cardImageStyle}
                  />
                </div>
                <div className="col-12 col-md-8">
                  <div className="card-body" style={contentStyle}>
                    <h1 className="" style={{color:'#CF2030'}}>Ashish Prajapati</h1>
                    <div className="horizontalline" style={lineStyle}></div>

                    <table>
                      <tbody>
                        <tr>
                          <td style={{color:'#CF2030',fontWeight:'500',fontSize:'19px'}}>Business</td>
                          <td style={{paddingLeft:'23px',paddingRight:'23px',color:'#CF2030'}}> : </td>
                          <td>PVC Interlocking Tiles for Industrial & Retail applications.</td>
                        </tr>
                        <tr>
                          <td style={{color:'#CF2030',fontWeight:'500',fontSize:'19px'}}>Company</td>
                          <td style={{paddingLeft:'23px',paddingRight:'23px',color:'#CF2030'}}> : </td>
                          <td>Mexico</td>
                        </tr>
                        <tr>
                          <td style={{color:'#CF2030',fontWeight:'500',fontSize:'19px'}}>Ernst Handel</td>
                          <td style={{paddingLeft:'23px',paddingRight:'23px',color:'#CF2030'}}> : </td>
                          <td>Amazinno Engineering</td>
                        </tr>
                        <tr>
                          <td style={{color:'#CF2030',fontWeight:'500',fontSize:'19px'}}>Category</td>
                          <td style={{color:'#CF2030',paddingLeft:'23px',paddingRight:'23px'}}> : </td>
                          <td>Engineering</td>
                        </tr>
                        <tr>
                          <td style={{color:'#CF2030',fontWeight:'500',fontSize:'19px'}}>Phone</td>
                          <td style={{color:'#CF2030',paddingLeft:'23px',paddingRight:'23px'}}> : </td>
                          <td>+91 98980 36384</td>
                        </tr>
                        <tr>
                          <td style={{color:'#CF2030',fontWeight:'500',fontSize:'19px'}}>E-mail</td>
                          <td style={{color:'#CF2030',paddingLeft:'23px',paddingRight:'23px'}}> : </td>
                          <td>amazinno.engg@gmail.com</td>
                        </tr>
                        <tr>
                          <td style={{color:'#CF2030',fontWeight:'500',fontSize:'19px'}}>Website</td>
                          <td style={{color:'#CF2030',paddingLeft:'23px',paddingRight:'23px'}}> : </td>
                          <td>www.amazinno.in</td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="socialMedia d-flex gap mt-4 mb-5">
                      <div
                        className="instagram"
                        style={{
                          background: "linear-gradient(#940E1A, #CF2030)",
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 5px",
                          border: "2px solid #CF2030",
                        }}
                      >
                        <i className="fa fa-instagram text-light text-center" style={{fontSize:'22px'}}></i>
                      </div>
                      <div
                        className="instagram"
                        style={{
                          background: "linear-gradient(#940E1A, #CF2030)",
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 5px",
                          border: "2px solid #CF2030",
                        }}
                      >
                        <i className="fa-brands fa-facebook text-light text-center" style={{fontSize:'22px'}}></i>
                      </div>
                      <div
                        className="instagram"
                        style={{
                          background: "linear-gradient(#940E1A, #CF2030)",
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 5px",
                          border: "2px solid #CF2030",
                        }}
                      >
                        <i className="fa fa-twitter text-light text-center" style={{fontSize:'22px'}}></i>
                      </div>
                      <div
                        className="instagram"
                        style={{
                          background: "linear-gradient(#940E1A, #CF2030)",
                          height: "50px",
                          width: "50px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 5px",
                          border: "2px solid #CF2030",
                        }}
                      >
                        <i className="fa fa-linkedin text-light text-center" style={{fontSize:'22px'}}></i>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      
      <style jsx>{`
       @media (max-width: 768px) {
        .container {
          padding: 10px;
        }
      
        .row {
          margin-top: 5%;
        }
      
        .card {
          flex-direction: column;
          margin-top: 10px; /* Add margin-top for mobile screens */
        }
      
        .card-body {
          margin-left: 0;
        }
      
        .card img {
          height: auto; /* Adjust height for smaller screens */
          width: 100%; /* Ensure image fits within its container */
        }
      
        table {
          width: 100%;
        }
      
        .socialMedia {
          justify-content: center;
        }
      
        .socialMedia div {
          margin: 0 4px; /* Adjust margins for smaller screens */
        }
      }
      
      @media (max-width: 576px) {
        .card-body {
          font-size: 14px; /* Smaller font size for very small screens */
        }
      
        .card img {
          height: auto; /* Maintain aspect ratio */
          width: 100%;
        }
      
        table td {
          font-size: 12px; /* Smaller font size for very small screens */
        }
      }
      `}</style>
    </div>
    <VideoCard />
    </div>
  );
}

export default Home;
