import React from "react";
import HomeBG from "../Assets/ProductsPage.png";
import VideoCard from "../Components/VideoCard";
import CardIMG from '../Assets/CardIMG1.jpg';

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${HomeBG})`,
    // backgroundImage: 'linear-gradient(#EEEEEE, #DBDBDB)',
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
    // borderRadius: "10px",
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    border: "none",
  };

  const cardImageStyle = {
    display: "flex",
    alignSelf: "center",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  };

  const contentStyle = {
    padding: "20px",
    marginLeft: "65px", // Add margin here to create the gap
  };

  const lineStyle = {
    border: "none",
    borderTop: "3px dashed #CF2030",
    margin: "20px 0",
    width: "45%",
  };

  return (
    <div style={backgroundStyle}>
      {/* ......HOME PAGE MAIN TOP CONTENT....... */}
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{
          height: "100%",
          padding: "20px",
          marginTop:'0%'
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
                    className="img-fluid p-3"
                    alt="Card"
                    style={cardImageStyle}
                  />
                </div>
                <div className="col-12 col-md-8">
                  <div className="card-body" style={contentStyle}>
                    <h1 className="" style={{color:'#CF2030'}}>Ashish Prajapati</h1>
                    <div className="horizontalline" style={lineStyle}></div>
                    {/* <hr
                      className="dotted-hr"
                      style={{
                        border: "none",
                        borderTop: "3px dashed #CF2030",
                        margin: "20px 0",
                        width: "50%",
                      }}
                    /> */}

                    <table>
                      <tr>
                        <td className="" style={{color:'#CF2030',fontWeight:'500',fontSize:'19px'}}>Business</td>
                        <td className="" style={{paddingLeft:'23px',paddingRight:'23px',color:'#CF2030'}}> : </td>
                        <td>
                          PVC Interlocking Tiles for Industrial & Retail
                          applications.
                        </td>
                      </tr>
                      <tr>
                        <td className="" style={{color:'#CF2030',fontWeight:'500',fontSize:'16px'}}>Company</td>
                        <td className="" style={{paddingLeft:'23px',paddingRight:'23px',color:'#CF2030'}}> : </td>
                        <td>Mexico</td>
                      </tr>
                      <tr>
                        <td className="" style={{color:'#CF2030',fontWeight:'500',fontSize:'16px'}}>Ernst Handel</td>
                        <td className="" style={{paddingLeft:'23px',paddingRight:'23px',color:'#CF2030'}}> : </td>
                        <td>Amazinno Engineering</td>
                      </tr>
                      <tr>
                        <td className="" style={{color:'#CF2030',fontWeight:'500',fontSize:'16px'}}>Category</td>
                        <td className="" style={{color:'#CF2030',paddingLeft:'23px',paddingRight:'23px'}}> : </td>
                        <td>Engineering</td>
                      </tr>
                      <tr>
                        <td className="" style={{color:'#CF2030',fontWeight:'500',fontSize:'16px'}}>Phone</td>
                        <td className="" style={{color:'#CF2030',paddingLeft:'23px',paddingRight:'23px'}}> : </td>
                        <td>+91 98980 36384</td>
                      </tr>
                      <tr>
                        <td className=""style={{color:'#CF2030',fontWeight:'500',fontSize:'16px'}}>E-mail</td>
                        <td className="" style={{color:'#CF2030',paddingLeft:'23px',paddingRight:'23px'}}> : </td>
                        <td>amazinno.engg@gmail.com</td>
                      </tr>
                      <tr >
                        <td className="" style={{color:'#CF2030',fontWeight:'500',fontSize:'16px'}}>Website</td>
                        <td className="" style={{color:'#CF2030',paddingLeft:'23px',paddingRight:'23px'}}> : </td>
                        <td >www.amazinno.in</td>
                      </tr>
                    </table>

                    <div className="socialMedia d-flex gap mt-3 mb-5">
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

      <VideoCard />
    </div>
  );
}

export default Home;
