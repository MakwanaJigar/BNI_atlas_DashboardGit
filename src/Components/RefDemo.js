import React from 'react';
import Vector from '../Assets/Vector.png';
import Footer from '../Components/Footer';

const RefDemo = () => {

    const lineStyle = {
        border: "0",
        height: "3px",
        background: "#ddd",
        marginTop: "20px",
        marginBottom: "18px",
        width: "100%",
    };

    return (
        <>
            <div className="container-fluid">
                <div className="container" style={{ width: "80%" ,marginTop:'3%'}}>
                  
                    <div className="row g-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        {/* ...........Last 10 Customers / Acquaintances........ */}

                        {/* .....CARD1..... */}
                        <div
                            className="col-md-5 "
                            style={{
                                height: "50%",
                                backgroundColor: "#F4F4F4",
                                borderRadius: "10px",
                                padding: "18px",
                                border: "1px solid #ddd",
                                // width: "49%",
                            }}
                        >
                            <div className="cardTitle">
                                <h4 className="text-danger">Good Referrals </h4>
                                <hr style={lineStyle} />
                            </div>
                            <form class="row g-3">
                                <div class="col-md-12">

                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputAddress"
                                        placeholder="Enter Customers Name"
                                    />
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-outline-danger">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* .....CARD2..... */}
                        <div
                            className="col-md-5 "
                            style={{
                                height: "50%",
                                backgroundColor: "#F4F4F4",
                                borderRadius: "10px",
                                padding: "18px",
                                border: "1px solid #ddd",
                                // width: "49%",
                            }}
                        >
                            <div className="cardTitle">
                                <h4 className="text-danger">Bad Referrals </h4>
                                <hr style={lineStyle} />
                            </div>
                            <form class="row g-3">
                                <div class="col-md-12">

                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputAddress"
                                        placeholder="Enter Customers Name"
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
            </div>


            <style>
                {`
          .col-md-5 {
            width: 48%;
          }
          
         
          @media (max-width: 767px) {
            .col-md-5 {
              width: 100% !important; 
              margin-bottom: 10px; 
            }
            .col-md-5 {
              width: 100%;
              margin-bottom: 20px;
            }
            .cardData {
              flex-direction: column;
              gap: 10px;
            }
            .datalist1, .datalist2 {
              width: 100%; 
              margin-bottom: 10px; 
            }
          
            .datalist2 {
              margin-bottom: 0; 
            }
          }
        `}
            </style>

        <Footer />  
        </>
    );
}

export default RefDemo;
