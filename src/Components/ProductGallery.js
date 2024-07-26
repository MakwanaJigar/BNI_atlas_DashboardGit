import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ProductGallery() {
 // Array of 10 dummy image URLs
 const images = [
    'https://via.placeholder.com/280x195?text=Image+1',
    'https://via.placeholder.com/280x195?text=Image+2',
    'https://via.placeholder.com/280x195?text=Image+3',
    'https://via.placeholder.com/280x195?text=Image+4',
    'https://via.placeholder.com/280x195?text=Image+5',
    'https://via.placeholder.com/280x195?text=Image+6',
    'https://via.placeholder.com/280x195?text=Image+7',
    'https://via.placeholder.com/280x195?text=Image+8',
    'https://via.placeholder.com/280x195?text=Image+9',
    'https://via.placeholder.com/280x195?text=Image+10'
  ];

  // Responsive settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 4
    }
  };

  return (
    <div style={{ width: '90%', position: 'relative' }}>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        arrows={true}
        centerMode={true}
        customTransition="all 1s ease-in-out"
        transitionDuration={1000}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {images.map((src, index) => (
          <div key={index} style={{ padding: '0 10px' }}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                width: '280px',
                borderRadius: '10px',
                height: '195px',
                filter: 'none',
                transition: 'filter 0.3s ease, opacity 0.3s ease',
              }}
            />
          </div>
        ))}
      </Carousel>
      <style>
        {`
          .react-multi-carousel-item {
            filter: blur(2px);
            opacity: 0.6;
          }

          .react-multi-carousel-item.react-multi-carousel-item--active {
            filter: none;
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
}

export default ProductGallery;
