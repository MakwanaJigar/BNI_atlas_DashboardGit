import React from 'react';
import Vector from '../Assets/Vector.png';

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
        <div className='container' style={{ width: '80%', marginTop: '1.4%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

            <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap' }}>

                {/* .....CARD1..... */}
                <div className="col-md-5" style={{ height: 'auto', backgroundColor: '#F4F4F4', borderRadius: '10px', padding: '15px', border: '1px solid #ddd', width: '48%', marginBottom: '20px' }}>

                    <div className="cardTitle">
                        <h4 className='text-danger'>Good Referrals </h4>
                        <hr style={lineStyle} />
                    </div>

                    <div className="cardData" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p className='' style={{ color: '#625F5F' }}>Good referrals are reputed Builders, Architects & Consultants. Good referrals are reputed Industry Owners.</p>
                        <div className="dataist2"></div>
                    </div>

                </div>

                {/* .....CARD2..... */}
                <div className="col-md-5" style={{ height: 'auto', backgroundColor: '#F4F4F4', borderRadius: '10px', padding: '15px', border: '1px solid #ddd', width: '48%' }}>

                    <div className="cardTitle">
                        <h4 className='text-danger'>Bad Referrals </h4>
                        <hr style={lineStyle} />
                    </div>

                    <div className="cardData" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <p className='' style={{ color: '#625F5F' }}>Good referrals are reputed Builders, Architects & Consultants. Good referrals are reputed Industry Owners.</p>
                        <div className="dataist2"></div>
                    </div>

                </div>

            </div>

            {/* ..........Contact Sphere Top 3 !!!........... */}

            <div className="row" style={{ width: '100%', marginTop: '2%' }}>
                <div className="col-md-12 col-12" style={{ height: 'auto', backgroundColor: '#F4F4F4', borderRadius: '10px', padding: '15px', border: '1px solid #ddd', width: '100%' }}>
                    <div className="cardTitle">
                        <h4 className='text-danger'>Contact Sphere Top 3 !!!</h4>
                        <hr style={lineStyle} />
                        <p style={{ color: '#625F5F' }}>What 3 professions would help you round out your contact sphere?</p>
                    </div>

                    <div className="cardData" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: '25px' }}>
                        <p style={{ color: '#CF2030', fontSize: '21px', textAlign: 'center' }}>Builders & Consultants</p>
                        <p style={{ color: '#CF2030', fontSize: '21px', textAlign: 'center' }}>Architects & Interior Designers</p>
                        <p style={{ color: '#CF2030', fontSize: '21px', textAlign: 'center' }}>Industrial Suppliers</p>
                    </div>
                    <div>
                        <p style={{ color: '#625F5F', fontSize: '19px', }}>Make a commitment to your one-on-one partner to help fill their Contact Sphere by inviting people to BNI that are in their TOP 3!!!</p>
                    </div>
                </div>
            </div>

            <style>
                {`
                    @media (max-width: 767px) {
                        .cardData {
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            text-align: center;
                        }

                        .cardData p {
                            font-size: 18px;
                            margin-bottom: 10px;
                            width: 100%;
                        }

                        .cardData p:last-of-type {
                            font-size: 17px;
                        }
                    }
                `}
            </style>

        </div>
    );
}

export default RefDemo;
