import React from 'react';
import HomeTab from "./HomeTab";
import Video1 from '../Assets/Video/Video1.mp4';

const VideoCard = () => {

  // Style to maintain the aspect ratio and ensure full size
  const videoCardContainerStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "548px", 
    height: "auto", // Remove fixed height
    paddingBottom: "63.6%", // Aspect ratio 349/548 * 100
    margin: "auto",
    marginBottom: "20px",
    overflow: "hidden", // Ensure child elements are clipped to the border radius
  };

  const videoStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%", // Fill the container width
    height: "100%", // Fill the container height
    borderRadius: "10px", // Apply border-radius to the video
    border: '1px solid gray',
    objectFit: "cover", // Ensures the video covers the container
  };

  const contentStyle = {
    padding: "20px",
  };

  const containerStyle = {
    height: "80vh",
    marginTop:'0%',
    padding: "20px",
    '@media (max-width: 768px)': {
      padding: "10px",
    },
    
  };

  const rowStyle = {
    width: "100%",
    maxWidth: "1200px",
    display: "flex",
    flexDirection: "row",
    '@media (max-width: 768px)': {
      flexDirection: "column",
      alignItems: "center",
    },
  };

  const colStyle = {
    '@media (max-width: 768px)': {
      width: "100%",
    },
  };

  const lineStyle = {
    border: "none",
    borderTop: "3px solid #CF2030",
    margin: "20px 0",
    width: "27%",
  };

  return (
    <div>
      {/* .......HOME PAGE SECOND CARD......... */}

      <div
        className="container d-flex justify-content-center align-items-center"
        style={containerStyle}
      >
        <div
          className="row border-none"
          style={rowStyle}
        >
          <div className="col-12">
            <div className="card mb-3" style={{ border: "none" }}>
              <div className="row g-0">
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center" style={colStyle}>
                  <div style={videoCardContainerStyle}>
                    <video
                      controls
                      style={videoStyle}
                      autoPlay={false}
                    >
                      <source src={Video1} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="col-12 col-md-6 p-3" style={contentStyle}>
                  <div className="card-body">
                    <h1 className="text-dark">
                      25 Seconds <span className="text-danger">Intro</span>
                    </h1>
                    
                    <div className="horizontalline" style={lineStyle}></div>
                    {/* <hr className="dotted-hr" style={{ border: 'none', borderTop: '3px solid red', margin: '10px 0', width: '20%' }} /> */}
                    <p className="" style={{ color: "#625F5F" }}>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Adipisci iusto facilis quasi incidunt? Velit voluptates
                      ipsam voluptatem nam incidunt alias dolorum, eius fugiat.
                      Quos, sunt ratione fugit, debitis aut dicta quam
                      laboriosam officiis iste, autem iusto repellendus culpa
                      facere distinctio mollitia eius. Deleniti, dolores ullam
                      cum amet pariatur consequuntur vitae distinctio, autem
                      maiores cupiditate, dicta eaque. Sunt architecto
                      consequatur reiciendis aperiam. Eius excepturi sint,
                      doloremque pariatur molestias exercitationem, dicta
                      deleniti nemo aperiam consequatur porro numquam! Hic
                      necessitatibus rerum fugit veniam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HomeTab />
    </div>
  );
}

export default VideoCard;
