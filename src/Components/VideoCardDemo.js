import React, { useState } from "react";
import HomeTab from "./HomeTab";

const VideoCardDemo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedVideo(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleClick = () => {
    document.getElementById("videoInput").click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the video file upload here (e.g., send it to a server)
    console.log(selectedVideo);
  };

  const handleUrlChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const lineStyle = {
    border: "none",
    borderTop: "3px solid #CF2030",
    margin: "20px 0",
    width: "50%",
  };

  return (
    <>
    <div
      className="container-fluid"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor:'#fff',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="container row"
        style={{
          width: "84%",
          height: "100%",
          padding: "20px",
          margin: "50px",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        {/* .....VIDEO SECTION....... */}

        <div
          className="videoSection col-md-5"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <input
              id="videoInput"
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              style={{ display: "none" }}
            />
            <div
              //   onClick={handleClick}
              style={{
                width: "100%",
                height: "300px", // You can adjust the height as needed
                backgroundColor: videoUrl ? "transparent" : "#bbb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                borderRadius: "10px", // Matches the existing style
                marginBottom: "10px",
              }}
            >
              {videoUrl ? (
                <div style={{ width: "100%", marginTop: "10px" }}>
                  {/* <h3>Video from URL:</h3> */}
                  <video
                    controls
                    style={{ width: "100%", borderRadius: "10px" }}
                  >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="">
                  {!previewUrl && <span> upload a video</span>}
                  {previewUrl && (
                    <video
                      controls
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    >
                      <source src={previewUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              )}
            </div>

            <input
              type="url"
              placeholder="Enter video URL"
              value={videoUrl}
              onChange={handleUrlChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                marginBottom: "10px",
              }}
            />
            <button type="submit" style={{ marginTop: "10px" }}>
              Upload
            </button>
          </form>
        </div>

        {/* ...........CONTENT SECTION.......... */}

        <div
          className="contentSection col-md-6"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
          }}
        >
            <div className="">
          <h1 className="text-dark">
            25 Seconds <span className="text-danger">Intro</span>
          </h1>
          <div className="horizontalline" style={lineStyle}></div>
          </div>
          {/* .............TEXT AREA.......... */}

          <div className="">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Write somothing About you !!"
              rows="8"
              cols='90'
            ></textarea>
          </div>
        </div>

      </div>
    </div>
    <HomeTab />
    </>
  );
};

export default VideoCardDemo;
