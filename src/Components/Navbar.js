import React from 'react';
import Logo from '../Assets/Group66.png';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-light shadow-md p-3 mb-3 bg-body-tertiary" style={{height:'85px'}} >
                <div className="container-fluid d-flex align-items-center justify-content-between" style={{ width: '80%' }}>
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="Logo" width="114" height="68" className="d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    style={{
                                        fontSize: '35px',
                                        fontWeight: '500',
                                        color: '#000',
                                        fontFamily: 'Outfit, sans-serif', 
                                    }}
                                    aria-current="page"
                                    href="#"
                                >
                                   GAIN SHEET
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex gap-3">
                        <button className="btn text-dark" type="button" style={{ height: '41px', width: '109px',backgroundColor:'#EDEDED',border:'0.2px solid rgb(207 32 48 / 19%)',fontWeight:'500' }}>
                            <i className="fa-regular fa-user text-danger fw-500"></i> Sign In
                        </button>
                        <button className="btn text-light" type="button" style={{ background: 'linear-gradient(#940E1A, #CF2030)', height: '41px', width: '109px' }}>
                            Sign Up <i className="fa-solid fa-arrow-right ms-2"></i>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
