import React, { useState } from "react";
import ProductGallery from "./ProductGallery";
import ImageSlider from "./ImageSlider";
import HomeTabDemo from "./HomeTabDemo";

function HomeTab() {
    const [business, setBusiness] = useState(true);
    const [personal, setPersonal] = useState(false);
    const [miscellaneous, setMiscellaneous] = useState(false);

    // ........business onclick function..............

    const handlebusiness = () => {
        setBusiness(true);
        setPersonal(false);
        setMiscellaneous(false);
    };

    // ..........personal onclick function..........

    const handlepersonal = () => {
        setBusiness(false);
        setPersonal(true);
        setMiscellaneous(false);
    };

    // ..........miscellaneous onclick function..........

    const handlemiscellaneous = () => {
        setBusiness(false);
        setPersonal(false);
        setMiscellaneous(true);
    };

    const cardStyle = {
        display: "flex",
        flexDirection: "row",
        height: "100%",
        border: "none",
        borderRadius: "10px",
        overflow: "hidden",
        background: 'transparent'
    };

    const cardImageStyle = {
        display: "flex",
        alignSelf: "center",
        width: "336px",
        height: "320px",
        objectFit: "cover",
        borderRadius: "10px",
    };
    const buttonStyle = {
        position: "absolute",
        bottom: "15%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "80%",
        textAlign: "center",
        backgroundColor: "#CF2030",
        color: "white",
        border: "none",
        padding: "10px",
        borderRadius: "5px",
    };

    return (
        <>
            <div
                className="py-3"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    //   marginTop:'-1%'
                }}
            >
                <ul className="nav nav-pills flex-column flex-md-row" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <li className="nav-item p-2 p-md-2" style={{ width: '20%', textAlign: 'center' }}>
                        <a
                            className={`nav-link ${business ? "active" : ""}`}
                            style={{
                                borderBottom: "2px solid #D54955",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: "10px",
                                borderBottomLeftRadius: "0", // Remove border radius from the bottom left
                                borderBottomRightRadius: "0", // Remove border radius from the bottom right
                                backgroundColor: business ? "#CF2030" : "#EDEDED",
                                color: business ? "#FFF" : "#CF2030",
                                cursor: "pointer",
                                padding: '20px'
                            }}
                            onClick={handlebusiness}
                        >
                            BUSINESS INFORMATION
                        </a>
                    </li>
                    <li className="nav-item p-2 p-md-2" style={{ width: '20%', textAlign: 'center' }}>
                        <a
                            className={`nav-link ${personal ? "active" : ""}`}
                            style={{
                                borderBottom: "2px solid #D54955",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: "10px",
                                borderBottomLeftRadius: "0", // Remove border radius from the bottom left
                                borderBottomRightRadius: "0", // Remove border radius from the bottom right
                                backgroundColor: personal ? "#CF2030" : "#EDEDED",
                                color: personal ? "#FFF" : "#CF2030",
                                cursor: "pointer",
                                padding: '20px'
                            }}
                            onClick={handlepersonal}
                        >
                            PERSONAL INFORMATION
                        </a>
                    </li>
                    <li className="nav-item p-2 p-md-2" style={{ width: '20%', textAlign: 'center' }}>
                        <a
                            className={`nav-link ${miscellaneous ? "active" : ""}`}
                            style={{
                                borderBottom: "2px solid #D54955",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: "10px",
                                borderBottomLeftRadius: "0", // Remove border radius from the bottom left
                                borderBottomRightRadius: "0", // Remove border radius from the bottom right
                                backgroundColor: miscellaneous ? "#CF2030" : "#EDEDED",
                                color: miscellaneous ? "#FFF" : "#CF2030",
                                cursor: "pointer",
                                padding: '20px'
                            }}
                            onClick={handlemiscellaneous}
                        >
                            MISCELLANEOUS
                        </a>
                    </li>
                </ul>

            </div>

            {/* ..............BUSINESS INFORMATION.............. */}

            {business ? (
                <div
                    className="container-fluid d-flex justify-content-center align-items-center"
                    style={{ padding: "20px", backgroundColor: '#EDEDED', marginTop: '-1.7%' }}
                >
                    <div className="row d-flex justify-content-center align-items-center" style={{ width: "100%", maxWidth: "1200px" }}>
                        <div className="col-12">
                            <div className="card mt-5" style={{ ...cardStyle, padding: '20px' }}>
                                <div className="position-relative">
                                    <img
                                        src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        className="img-fluid rounded-start"
                                        alt="Card"
                                        style={cardImageStyle}
                                    />
                                    <button className="btn" style={buttonStyle}>
                                        Amazinno Engineering
                                    </button>
                                </div>
                                <div className="row g-0">
                                    <div className="col-12 col-md-12">
                                        <div className="card-body pt-1 pb-5 p-5">
                                            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 5px' }}>
                                                <tr style={{ borderBottom: '1px solid #ddd' }}>
                                                    <td className="" style={{ color: '#CF2030', fontWeight: '500', fontSize: '19px', verticalAlign: 'top', width: '20%' }}>Address</td>
                                                    <td className="" style={{ paddingLeft: '23px', paddingRight: '23px', color: '#CF2030', verticalAlign: 'top' }}>:</td>
                                                    <td style={{ width: '100%', verticalAlign: 'top' }}>Amazinno Engineering 511, Anushri Accolade 2, Opp. Shell Petrol Pump, Science City Road, Sola, Ahmedabad – 380060</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="3">
                                                        <hr style={{ border: '1px solid #bbb', margin: '10px 0' }} />
                                                    </td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #000' }}>
                                                    <td className="" style={{ color: '#CF2030', fontWeight: '500', fontSize: '16px', width: '20%', verticalAlign: 'top' }}>Previous Assignment</td>
                                                    <td className="" style={{ paddingLeft: '23px', paddingRight: '23px', color: '#CF2030', verticalAlign: 'top' }}>:</td>
                                                    <td style={{ verticalAlign: 'top', width: '80%' }}>More than 13 Years of Industries experience in various MNC in multiple Positions.</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="3">
                                                        <hr style={{ border: '1px solid #bbb', margin: '10px 0' }} />
                                                    </td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #bbb' }}>
                                                    <td className="" style={{ color: '#CF2030', fontWeight: '500', fontSize: '16px', verticalAlign: 'top' }}>Profession</td>
                                                    <td className="" style={{ paddingLeft: '23px', paddingRight: '23px', color: '#CF2030', verticalAlign: 'top' }}>:</td>
                                                    <td style={{ verticalAlign: 'top' }}>PVC Interlocking Tiles for Industrial & Retail applications.</td>
                                                </tr>
                                            </table>

                                            <div className="d-flex align-items-center justify-content-between mt-3">
                                                <p className="" style={{ fontSize: '16px', fontWeight: '500', color: '#CF2030' }}>
                                                    Turn over :
                                                    <span className="text-dark" style={{ fontWeight: '400', marginLeft: '20px' }}> 5cr to 10cr</span>
                                                </p>
                                                <p className="" style={{ fontSize: '16px', fontWeight: '500', color: '#CF2030' }}>
                                                    Company Size :
                                                    <span className="text-dark" style={{ fontWeight: '400', marginLeft: '20px' }}>1-10</span>
                                                </p>
                                                <p className="" style={{ fontSize: '16px', fontWeight: '500', color: '#CF2030' }}>
                                                    Years in this Business :
                                                    <span className="text-dark" style={{ fontWeight: '400', marginLeft: '20px' }}>7 Years</span>
                                                </p>
                                            </div>

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
                                                        // border: "2px solid #CF2030",
                                                    }}
                                                >
                                                    <i className="fa fa-instagram text-light text-center" style={{ fontSize: '22px' }}></i>
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
                                                        // border: "2px solid #CF2030",
                                                    }}
                                                >
                                                    <i className="fa-brands fa-facebook text-light text-center" style={{ fontSize: '22px' }}></i>
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
                                                        // border: "2px solid #CF2030",
                                                    }}
                                                >
                                                    <i className="fa fa-twitter text-light text-center" style={{ fontSize: '22px' }}></i>
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
                                                        // border: "2px solid #CF2030",
                                                    }}
                                                >
                                                    <i className="fa fa-linkedin text-light text-center" style={{ fontSize: '22px' }}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

            {/* ................PERSONAL INFORMATION............ */}

            {personal ? (
                <div
                    className="container-fluid d-flex justify-content-center align-items-center"
                    style={{ padding: "20px", backgroundColor: '#EDEDED', marginTop: '-1.7%' }}
                >
                    <div className="row d-flex justify-content-center align-items-center" style={{ width: "100%", maxWidth: "1200px" }}>
                        <div className="col-12">
                            <div className="card mt-5" style={{ ...cardStyle, padding: '20px' }}>
                                <div className="position-relative">
                                    <img
                                        src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        className="img-fluid rounded-start"
                                        alt="Card"
                                        style={cardImageStyle}
                                    />
                                    <button className="btn" style={buttonStyle}>
                                        Amazinno Engineering
                                    </button>
                                </div>
                                <div className="row g-0">
                                    <div className="col-12 col-md-12">
                                        <div className="card-body pt-1 pb-5 p-5">
                                            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 5px' }}>
                                                <tr style={{ borderBottom: '1px solid #ddd' }}>
                                                    <td className="" style={{ color: '#CF2030', fontWeight: '500', fontSize: '19px', verticalAlign: 'top', width: '20%' }}>Address</td>
                                                    <td className="" style={{ paddingLeft: '23px', paddingRight: '23px', color: '#CF2030', verticalAlign: 'top' }}>:</td>
                                                    <td style={{ width: '100%', verticalAlign: 'top' }}>Amazinno Engineering 511, Anushri Accolade 2, Opp. Shell Petrol Pump, Science City Road, Sola, Ahmedabad – 380060</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="3">
                                                        <hr style={{ border: '1px solid #bbb', margin: '10px 0' }} />
                                                    </td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #000' }}>
                                                    <td className="" style={{ color: '#CF2030', fontWeight: '500', fontSize: '16px', width: '20%', verticalAlign: 'top' }}>Previous Assignment</td>
                                                    <td className="" style={{ paddingLeft: '23px', paddingRight: '23px', color: '#CF2030', verticalAlign: 'top' }}>:</td>
                                                    <td style={{ verticalAlign: 'top', width: '80%' }}>More than 13 Years of Industries experience in various MNC in multiple Positions.</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="3">
                                                        <hr style={{ border: '1px solid #bbb', margin: '10px 0' }} />
                                                    </td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #bbb' }}>
                                                    <td className="" style={{ color: '#CF2030', fontWeight: '500', fontSize: '16px', verticalAlign: 'top' }}>Profession</td>
                                                    <td className="" style={{ paddingLeft: '23px', paddingRight: '23px', color: '#CF2030', verticalAlign: 'top' }}>:</td>
                                                    <td style={{ verticalAlign: 'top' }}>PVC Interlocking Tiles for Industrial & Retail applications.</td>
                                                </tr>
                                            </table>

                                            <div className="d-flex align-items-center justify-content-between mt-3">
                                                <p className="" style={{ fontSize: '16px', fontWeight: '500', color: '#CF2030' }}>
                                                    Turn over :
                                                    <span className="text-dark" style={{ fontWeight: '400', marginLeft: '20px' }}> 5cr to 10cr</span>
                                                </p>
                                                <p className="" style={{ fontSize: '16px', fontWeight: '500', color: '#CF2030' }}>
                                                    Company Size :
                                                    <span className="text-dark" style={{ fontWeight: '400', marginLeft: '20px' }}>1-10</span>
                                                </p>
                                                <p className="" style={{ fontSize: '16px', fontWeight: '500', color: '#CF2030' }}>
                                                    Years in this Business :
                                                    <span className="text-dark" style={{ fontWeight: '400', marginLeft: '20px' }}>7 Years</span>
                                                </p>
                                            </div>

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
                                                        // border: "2px solid #CF2030",
                                                    }}
                                                >
                                                    <i className="fa fa-instagram text-light text-center" style={{ fontSize: '22px' }}></i>
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
                                                        // border: "2px solid #CF2030",
                                                    }}
                                                >
                                                    <i className="fa-brands fa-facebook text-light text-center" style={{ fontSize: '22px' }}></i>
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
                                                        // border: "2px solid #CF2030",
                                                    }}
                                                >
                                                    <i className="fa fa-twitter text-light text-center" style={{ fontSize: '22px' }}></i>
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
                                                        // border: "2px solid #CF2030",
                                                    }}
                                                >
                                                    <i className="fa fa-linkedin text-light text-center" style={{ fontSize: '22px' }}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

            {/* ............miscellaneous INFORMATION........... */}

            {miscellaneous ? (
                <div
                    className="container-fluid d-flex justify-content-center align-items-center"
                    style={{ padding: "20px", backgroundColor: '#EDEDED', marginTop: '-1.7%' }}
                >
                    <div className="row d-flex justify-content-center align-items-center" style={{ width: "100%", maxWidth: "1200px" }}>
                        <div className="col-12">
                            <div className="card mt-5" style={{ ...cardStyle, padding: '20px' }}>
                                <div className="position-relative">
                                    <img
                                        src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        className="img-fluid rounded-start"
                                        alt="Card"
                                        style={cardImageStyle}
                                    />
                                    <button className="btn" style={buttonStyle}>
                                        Amazinno Engineering
                                    </button>
                                </div>
                                <div className="row g-0">
                                    <div className="col-12 col-md-12">
                                        <div className="card-body pt-1 pb-5 p-5">
                                            <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 5px' }}>
                                                <tr style={{ borderBottom: '1px solid #ddd' }}>
                                                    <td className="" style={{ color: '#CF2030', fontWeight: '500', fontSize: '19px', verticalAlign: 'top', width: '20%' }}>Address</td>
                                                    <td className="" style={{ paddingLeft: '23px', paddingRight: '23px', color: '#CF2030', verticalAlign: 'top' }}>:</td>
                                                    <td style={{ width: '100%', verticalAlign: 'top' }}>Amazinno Engineering 511, Anushri Accolade 2, Opp. Shell Petrol Pump, Science City Road, Sola, Ahmedabad – 380060</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="3">
                                                        <hr style={{ border: '1px solid #bbb', margin: '10px 0' }} />
                                                    </td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #000' }}>
                                                    <td className="" style={{ color: '#CF2030', fontWeight: '500', fontSize: '16px', width: '20%', verticalAlign: 'top' }}>Previous Assignment</td>
                                                    <td className="" style={{ paddingLeft: '23px', paddingRight: '23px', color: '#CF2030', verticalAlign: 'top' }}>:</td>
                                                    <td style={{ verticalAlign: 'top', width: '80%' }}>More than 13 Years of Industries experience in various MNC in multiple Positions.</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="3">
                                                        <hr style={{ border: '1px solid #bbb', margin: '10px 0' }} />
                                                    </td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #bbb' }}>
                                                    <td className="" style={{ color: '#CF2030', fontWeight: '500', fontSize: '16px', verticalAlign: 'top' }}>Profession</td>
                                                    <td className="" style={{ paddingLeft: '23px', paddingRight: '23px', color: '#CF2030', verticalAlign: 'top' }}>:</td>
                                                    <td style={{ verticalAlign: 'top' }}>PVC Interlocking Tiles for Industrial & Retail applications.</td>
                                                </tr>
                                            </table>

                                            <div className="d-flex align-items-center justify-content-between mt-3">
                                                <p className="" style={{ fontSize: '16px', fontWeight: '500', color: '#CF2030' }}>
                                                    Turn over :
                                                    <span className="text-dark" style={{ fontWeight: '400', marginLeft: '20px' }}> 5cr to 10cr</span>
                                                </p>
                                                <p className="" style={{ fontSize: '16px', fontWeight: '500', color: '#CF2030' }}>
                                                    Company Size :
                                                    <span className="text-dark" style={{ fontWeight: '400', marginLeft: '20px' }}>1-10</span>
                                                </p>
                                                <p className="" style={{ fontSize: '16px', fontWeight: '500', color: '#CF2030' }}>
                                                    Years in this Business :
                                                    <span className="text-dark" style={{ fontWeight: '400', marginLeft: '20px' }}>7 Years</span>
                                                </p>
                                            </div>

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
                                                        // border: "2px solid #CF2030",
                                                    }}
                                                >
                                                    <i className="fa fa-instagram text-light text-center" style={{ fontSize: '22px' }}></i>
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
                                                        // border: "2px solid #CF2030",
                                                    }}
                                                >
                                                    <i className="fa-brands fa-facebook text-light text-center" style={{ fontSize: '22px' }}></i>
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
                                                        // border: "2px solid #CF2030",
                                                    }}
                                                >
                                                    <i className="fa fa-twitter text-light text-center" style={{ fontSize: '22px' }}></i>
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
                                                        // border: "2px solid #CF2030",
                                                    }}
                                                >
                                                    <i className="fa fa-linkedin text-light text-center" style={{ fontSize: '22px' }}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

            {/* <HomeTabDemo /> */}

            {/* <ProductGallery />    */}
            <ImageSlider />

        </>
    );
}

export default HomeTab;
