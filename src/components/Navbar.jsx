import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import handleCart from '../redux/reducer/handleCart';

const Navbar = () => {
    const state = useSelector((state) => state.handleCart);
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg  py-3 shadow-sm " style={{backgroundColor:"#f7f2f2"}}>
                <div className="container">
                    {/* <NavLink className="navbar-brand fw-bold fs-3 " to="/">ABG</NavLink> */}
                    <NavLink className="navbar-brand fw-bold fs-3" to="/" >
                        <img src="./Img/mylogo2.gif" alt="ABG Logo" /> 
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" style={{ fontSize: '25px',fontWeight:"600" }} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products" style={{ fontSize: '25px',fontWeight:"600" }}>Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/aboutus" style={{ fontSize: '25px',fontWeight:"600" }}>About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contactus" style={{ fontSize: '25px',fontWeight:"600" }}>Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/additional" style={{ fontSize: '25px' ,fontWeight:"600"}}>Others</NavLink>
                            </li>


                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark ">
                                <i className="fa fa-sign-in me-1 "></i> Login
                            </NavLink>
                        </div>

                        <div className="buttons">
                            <NavLink to="/register" className="btn btn-outline-dark ms-2 ">
                                <i className="fa fa-user-plus me-1 "></i> Register
                            </NavLink>
                        </div>

                        <div className="buttons">
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2 ">
                                <i className="fa fa-shopping-cart me-1 "></i> Cart({state.length})
                            </NavLink>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
