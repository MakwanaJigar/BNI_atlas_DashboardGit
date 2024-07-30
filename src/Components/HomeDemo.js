import React, { useState } from "react";
import VideoCardDemo from "./VideoCardDemo";

const HomeDemo = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    }
  };

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selectedImage);
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(#ffffff, #EDEDED)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="container row"
          style={{
            width: "80%",
            height: "100%",
            padding: "20px",
            margin: "50px",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          {/* ......IMAGE SECTION........ */}
          <div
            className="imageSection col-md-5"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <div
                onClick={handleClick}
                style={{
                  width: "100%",
                  height: "450px", // You can adjust the height as needed
                  backgroundColor: previewUrl ? "transparent" : "#bbb",
                  backgroundImage: previewUrl ? `url(${previewUrl})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  borderRadius: "10px", // Matches the existing img style
                }}
              >
                {!previewUrl && <span>Click to upload an image</span>}
              </div>
            </form>

          </div>

          {/* ........INPUT FIELDS SECTION........ */}

          <div className="InputSection col-md-6">
            
            <form class="row g-3">
              <div class="col-12">
                <label for="inputAddress" class="form-label">
                  NAME
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Enter your name"
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Business
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Enter your Business"
                />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Company
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Enter Company Name"
                />
              </div>

              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Category
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Enter Category"
                />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Enter Phone Number"
                />
              </div>

              <div class="col-md-6">
                <label for="inputCity" class="form-label">
                  E-mail
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="inputCity"
                  placeholder="Enter your Email"
                />
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">
                  Website
                </label>
                <input
                  type="url"
                  class="form-control"
                  id="inputCity"
                  placeholder="Enter your Website"
                />
              </div>

              {/* ...........SOCIAL MEDIA LINKS...... */}

              <div class="col-md-3">
                <label for="inputCity" class="form-label">
                  Instagram URL
                </label>
                <input
                  type="url"
                  class="form-control"
                  id="inputCity"
                  placeholder="URL"
                />
              </div>
              <div class="col-md-3">
                <label for="inputCity" class="form-label">
                  Facebook URL
                </label>
                <input
                  type="url"
                  class="form-control"
                  id="inputCity"
                  placeholder="URL"
                />
              </div>
              <div class="col-md-3">
                <label for="inputCity" class="form-label">
                  Twitter URL
                </label>
                <input
                  type="url"
                  class="form-control"
                  id="inputCity"
                  placeholder="URL"
                />
              </div>
              <div class="col-md-3">
                <label for="inputCity" class="form-label">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  class="form-control"
                  id="inputCity"
                  placeholder="URL"
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

       <VideoCardDemo />         
      {/* <VideoCard /> */}
    </>
  );
};

export default HomeDemo;
