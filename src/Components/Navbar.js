import React, { useState } from "react";
import Logo from "../Assets/Group66.png";

function Navbar() {
  

  const navstyle = {
    backgroundColor: 'white !important'

  }

  return (
    <div>
          <nav className="navbar navbar-expand-lg shadow-sm" style={navstyle}>
        <div className="container-fluid" style={{ maxWidth: '80%' }}>
          <a className="navbar-brand" href="#">
            <img
              src={Logo}
              alt="Logo"
              width="114"
              height="68"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-none d-lg-flex w-100 justify-content-between align-items-center">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center">
                <li className="nav-item">
                  <p
                    className="nav-link gain-sheet-text text-dark"
                    aria-current="page"
                  >
                    GAIN SHEET
                  </p>
                </li>
              </ul>
              <form className="d-flex gap-2" role="search">
                <button
                  className="btn"
                  type="button"
                  style={{
                    height: '41px',
                    width: '109px',
                    backgroundColor: '#EDEDED',
                    border: '0.2px solid rgb(207 32 48 / 19%)',
                    fontWeight: '500',
                  }}
                >
                  <i className="fa-regular fa-user text-danger fw-500"></i> Sign In
                </button>
                <button
                  className="btn text-light"
                  type="button"
                  style={{
                    background: 'linear-gradient(#940E1A, #CF2030)',
                    height: '41px',
                    width: '109px',
                  }}
                >
                  Sign Up <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </form>
            </div>
            <div className="d-lg-none">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-column align-items-center">
                <li className="nav-item">
                  <p
                    className="nav-link gain-sheet-text text-dark"
                    aria-current="page"
                  >
                    GAIN SHEET
                  </p>
                </li>
              </ul>
              <form className="d-flex flex-column align-items-center gap-2" role="search">
                <button
                  className="btn"
                  type="button"
                  style={{
                    height: '41px',
                    width: '109px',
                    backgroundColor: '#EDEDED',
                    border: '0.2px solid rgb(207 32 48 / 19%)',
                    fontWeight: '500',
                  }}
                >
                  <i className="fa-regular fa-user text-danger fw-500"></i> Sign In
                </button>
                <button
                  className="btn text-light"
                  type="button"
                  style={{
                    background: 'linear-gradient(#940E1A, #CF2030)',
                    height: '41px',
                    width: '109px',
                  }}
                >
                  Sign Up <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .gain-sheet-text {
          font-size: 35px;
          font-weight: 500;
          margin: 0;
        }
        @media (max-width: 768px) {
          .gain-sheet-text {
            font-size: 28px;
          }
        }
        @media (max-width: 576px) {
          .gain-sheet-text {
            font-size: 24px;
          }
        }
        .navbar-nav {
          flex-grow: 1;
          text-align: center;
        }
        .navbar-toggler {
          z-index: 1050; /* Ensure it is on top of other elements */
        }
        .navbar {
          position: sticky;
          top: 0;
          z-index: 1020; /* Adjust as needed to keep navbar above other content */
          background-color: #fff; /* Ensure navbar has a background color */
        }
      `}</style>
    </div>
  );
}

export default Navbar;
