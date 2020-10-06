import React from 'react';

import logo from '../../assets/homepage/img/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar main-navbar navbar-expand-md navbar-dark  fixed-top ">
      <img
        className="logo mr-auto"
        src={logo}
        alt="logo"
        height="55"
        width="66"
      />
      <button
        className="navbar-toggler bg-transparent"
        type="button"
        data-toggle="collapse"
        data-target="#Navbar"
      >
        <span>
          <i className="fa fa-bars" style={{color:'black'}}/>
        </span>
      </button>

      <div className="collapse navbar-collapse flex-grow-0 " id="Navbar">
        <ul className="navbar-nav " >

          <li className="nav-item active">
            <Link to="/" className="btn navbar-btn-half nav-link" style={{ color:'#003042',fontWeight:'bolder'}} href="#">
              Home
            </Link>
          </li>        
         
          <li className="nav-item ">
            <Link to="/AboutUs" className="btn navbar-btn-half nav-link"  style={{ color:'#003042',fontWeight:'bolder'}} href="#">
              About US
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/Apply" className="btn navbar-btn-half nav-link"  style={{ color:'#003042',fontWeight:'bolder'}} href="#">
              Apply
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/Career" className="btn navbar-btn-half nav-link"  style={{ color:'#003042',fontWeight:'bolder'}} href="#">
              Career
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/Events" className="btn navbar-btn-half nav-link"  style={{ color:'#003042',fontWeight:'bolder'}} href="#">
              Events
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/Editorial" className="btn navbar-btn-half nav-link"  style={{ color:'#003042',fontWeight:'bolder'}} href="#">
            Editorial
            </Link>
          </li>
          

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;