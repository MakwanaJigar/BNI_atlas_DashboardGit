import React, { useState } from "react";
import Rectangle11 from '../Assets/CardIMG.jpg';

const HomeTabDemo = () => {

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

  return (
    <div>
      
    {/* .........TABS SACTION........ */}

      <div
        className="py-3"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        //   marginTop:'-1%'
        }}
      >
        <ul className="nav nav-pills flex-column flex-md-row" style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <li className="nav-item p-2 p-md-3" style={{width:'20%',textAlign:'center'}}>
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
          <li className="nav-item p-2 p-md-3" style={{width:'20%',textAlign:'center'}}>
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
          <li className="nav-item p-2 p-md-3" style={{width:'20%',textAlign:'center'}}>
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

       <div className="" style={{width:'100%',backgroundColor:'#EDEDED',height:'100%'}}>

        {business ? (
       <div>

        <div className="row" style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center',width:'80%'}}>

            {/* ...........IMAG SECTION......... */}
            <div className="col-md-4" style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                <img src={Rectangle11} style={{width:'100%',height:'100%',objectFit:'cover'}} alt="" />
                <button style={{padding:'10px 30px',backgroundColor:'#CF2030',borderRadius:'5px',color:'#FFF',border:'none',position:'absolute',marginTop:'17%'}}>Amazinno Engineering</button>
            </div>

            {/* ...........CONTENT SECTION...... */}
            <div className="col-md-6">

                {/* ADDRESS */}
                <div className="address">
                    
                </div>

            </div>

        </div>

       </div>
      ) : null} 
        
       </div>       


    </div>
  );
}

export default HomeTabDemo;
