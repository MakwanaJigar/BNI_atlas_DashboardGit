import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Rectangle11 from '../Assets/Rectangle11.png';
import Rectangle13 from '../Assets/Rectangle13.png';
import Rectangle14 from '../Assets/Rectangle14.png';
import Rectangle15 from '../Assets/Rectangle15.png';
import GainsWork from './GainsWork';

// Custom Previous Arrow component
const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            style={{
                width: '40px',
                height: '40px',
                background:'linear-gradient(#E33E4D, #940E1A)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: '50%',
                left: '-10px',
                transform: 'translateY(-50%)',
                zIndex: 2,
                cursor: 'pointer',
                border:'2px solid #FFF'
            }}
            onClick={onClick}
        >
            <i className="fa-solid fa-arrow-left" style={{ color: 'white', fontSize: '16px' }}></i>
        </div>
    );
};

// Custom Next Arrow component
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            style={{
                width: '40px',
                height: '40px',
                background:'linear-gradient(#E33E4D, #940E1A)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: '50%',
                right: '-10px',
                transform: 'translateY(-50%)',
                zIndex: 2,
                cursor: 'pointer',
                border:'2px solid #FFF'
            }}
            onClick={onClick}
        >
            <i className="fa-solid fa-arrow-right" style={{ color: 'white', fontSize: '16px' }}></i>
        </div>
    );
};

function ImageSlider() {
    const lineStyle = {
        border: "none",
        borderTop: "3px solid #CF2030",
        margin: "10px 0",
        width: "10%",
    };

    const images = [
        Rectangle11,
        Rectangle13,
        Rectangle14,
        Rectangle15,
        Rectangle14,
        Rectangle15,
        // 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=600',
        // 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600',
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className='container-fluid'>
                <div className="" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                    <h1 className='fw-bold text-dark'><i className="fa-solid fa-photo-film text-danger"></i> Product Gallery </h1>
                </div>

                {/* ........HORIZONTAL LINE......... */}
                <div className="" style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <div className="horizontalline" style={lineStyle}></div>
                </div>

                {/* ............IMAGE SLIDER ..........*/}
                <div className='container' style={{ width: '80%', margin: '0 auto', marginTop: '2%', position: 'relative' }}>
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index} style={{ padding: '0 10px' }}> {/* Adjusted padding */}
                                <img
                                className='rounded-3 ps-2'
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    style={{ width: '100%', height: '195px', objectFit: 'cover', borderRadius: '8px' }}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <GainsWork />
        </>
    );
}

export default ImageSlider;
