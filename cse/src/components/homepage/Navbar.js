import React from 'react';

import logo from '../../assets/homepage/img/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <nav className="navbar main-navbar navbar-expand-md navbar-dark  fixed-top" >
      
      <button
        className="navbar-toggler bg-transparent"
        type="button"
        data-toggle="collapse"
        data-target="#Navbar"
      >
        <span>
          <i className="fa fa-bars" style={{color:'white'}}/>
        </span>
      </button>

      <div className="collapse navbar-collapse flex-grow-0 px-2" id="Navbar">
        <ul className="navbar-nav " >

          <li className="nav-item active">
            <Link to="/" className="navbar-btn-half nav-link" style={{fontWeight:"bold"}} href="#">
              Home
            </Link>
          </li>        
         
          <li className="nav-item ">
            <Link to="/" className="navbar-btn-half nav-link"  style={{ fontWeight:"bold"}} href="#">
              Join Clubs
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/" className="navbar-btn-half nav-link"  style={{ fontWeight:"bold"}} href="#">
              About Us
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/" className="navbar-btn-half nav-link"  style={{ fontWeight:"bold"}} href="#">
              Teams
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/" className="navbar-btn-half nav-link"  style={{ fontWeight:"bold"}} href="#">
              Events
            </Link>
            
          </li>
          <li className="nav-item ">
            <Link to="/" className="navbar-btn-half nav-link"  style={{ fontWeight:"bold"}} href="#">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;