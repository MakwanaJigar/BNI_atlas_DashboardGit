import React, { useState } from 'react';
import GainWorksDemo from '../Components/GainWorksDemo';

const ImageSliderDemo = () => {

  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleUpload = (file, index) => {
    // Simulate uploading process
    console.log(`Uploading image ${index + 1}:`, file);
    // Add your upload logic here (e.g., send it to a server)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    images.forEach((image, index) => {
      handleUpload(image.file, index);
    });
  };

  const lineStyle = {
    border: "none",
    borderTop: "3px solid #CF2030",
    margin: "10px 0",
    width: "50%",
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

        <div className="" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5%', flexDirection: 'column' }}>
          <h1 className='fw-bold text-dark'><i className="fa-solid fa-photo-film text-danger"></i> Product Gallery </h1>
          <div className="horizontalline" style={lineStyle}></div>
        </div>

        <div
          className="imageUploadSection col-md-4"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '3%',
          }}
        >
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              multiple
              style={{ marginBottom: '10px' }}
            />
            <button type="submit" style={{ marginTop: '10px' }}>Upload Images</button>
          </form>
          <div
            className="imagePreviews"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '20px',
              justifyContent: 'center',
              border: '1px solid #bbb'
            }}
          >
            {images.map((image, index) => (
              <div key={index} style={{ width: '150px', height: '150px', position: 'relative', border: '1px solid #bbb', padding: '10px' }}>
                <img
                  src={image.previewUrl}
                  alt={`Preview ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '5px',
                    right: '5px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    padding: '2px 5px',
                    borderRadius: '3px',
                    fontSize: '12px',
                  }}
                >
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>
        {`
          .col-md-5 {
            width: 48%;
          }
          
         
          @media (max-width: 767px) {

            .imageUploadSection form{
              display: flex !important;
              align-items: center !important;
              justify-content: space-between !important;
              flex-direction: row;
              padding: 20px;
            }
            .imageUploadSection form input{
              width: 50%;
              margin-top: 21px;
            }
          }
        `}
      </style>

      <GainWorksDemo />

    </>
  );
}

export default ImageSliderDemo;
