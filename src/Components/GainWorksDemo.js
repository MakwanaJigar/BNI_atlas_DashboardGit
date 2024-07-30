import React, { useState } from "react";
import CounterDemo from "./CounterDemo";
import CustomersDemo from "./CustomersDemo";

const GainWorksDemo = () => {

const [addGoal , setAddGoal] = useState([{ id: 1, value: '' }])


  const backgroundStyle = {
    // backgroundImage: `url(${HomeBG})`,
    backgroundImage: "linear-gradient(#FFFFFF, #DBDBDB)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: -1,
    marginTop: "5%",
    // height: "100%",
    paddingBottom: "5%",
  };
  const lineStyle = {
    border: "0",
    height: "3px",
    background: "#CF2030",
    marginTop: "-15px",
    marginBottom: "30px",
    width: "15%",
  };

//   .......ADD NEW INPUT FIELDS FUNCTIONS.......

const handleaddGoals = () => {
    setAddGoal([...addGoal, { id: addGoal.length + 1, value: '' }]);
}

const handleInputChange = (id, event) => {
    const newInputs = addGoal.map(input => {
      if (addGoal.id === id) {
        return { ...addGoal, value: event.target.value };
      }
      return addGoal;
    });
    setAddGoal(newInputs);
  };

  return (
    <div>
      <div className="container-fluid" style={backgroundStyle}>
        <div
          className="container"
          style={{
            width: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {/* ................TITLE SECTION........ */}

          <div
            className="title"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "25px",
              background: "transparent",
            }}
          >
            <h1 className="" style={{ color: "#CF2030" }}>
              GAINS
              <span className="text-dark"> Worksheet</span>
            </h1>
            <div className="horizontalline" style={lineStyle}></div>
          </div>

          {/* .............COMPONENT DATA SCETION.............. */}

          <div className="" style={{ width: "100%",border:'1px solid #bbb',padding:'20px',borderRadius:'10px' }}>
            <form class="row g-3">
              <div class="col-12">
                <label for="inputAddress text-danger" class="form-label">
                Goals (Short)
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Enter your Goals"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress text-danger" class="form-label">
                Accomplishments
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Enter Accomplishments"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress text-danger" class="form-label">
                Interests
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Enter your Interests"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress text-danger" class="form-label">
                Networks
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Enter your Networks"
                />
              </div>
              <div class="col-12">
                <label for="inputAddress text-danger" class="form-label">
                Skills
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Enter your Skills"
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

      <CounterDemo />
      </div>
      <CustomersDemo />
    </div>
  );
};

export default GainWorksDemo;
