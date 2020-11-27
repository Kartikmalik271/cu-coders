import React from 'react';

import logo from '../../assets/homepage/img/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar main-navbar navbar-expand-md navbar-dark  fixed-top justify-content-center">
      <img
        className="logo "
        src={logo}
        alt="logo"
        height="67"
        width="81"
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

          <li className="nav-item ">
            <Link to="/" className="btn navbar-btn-half nav-link " style={{ color:'#003042',fontWeight:'bolder'}} href="#">
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
            <Link to="/Editorial" className="btn navbar-btn-half nav-link"  style={{ color:'#003042',fontWeight:'bolder'}} href="#">
              Editorial
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/EditorialPost" className="btn navbar-btn-half nav-link"  style={{ color:'#003042',fontWeight:'bolder'}} href="#">
              EditorialP
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
            <Link to="/Upcoming" className="btn navbar-btn-half nav-link"  style={{ color:'#003042',fontWeight:'bolder'}} href="#">
              Upcoming
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/UpcomingDetails" className="btn navbar-btn-half nav-link"  style={{ color:'#003042',fontWeight:'bolder'}} href="#">
              UpcomingD
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/Past" className="btn navbar-btn-half nav-link"  style={{ color:'#003042',fontWeight:'bolder'}} href="#">
              Past
            </Link>
          </li>
          
          <li className="nav-item ">
            <Link to="/Blog" className="btn navbar-btn-half nav-link"  style={{ color:'#003042',fontWeight:'bolder'}} href="#">
              Blog
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/BlogPost" className="btn navbar-btn-half nav-link"  style={{ color:'#003042',fontWeight:'bolder'}} href="#">
              BlogPost
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/EventDet" className="btn navbar-btn-half nav-link"  style={{ color:'#003042',fontWeight:'bolder'}} href="#">
              EventDet
            </Link>
          </li>

          <li className="nav-item ">
            <Link to="/Gallery" className="btn navbar-btn-half nav-link"  style={{ color:'#003042',fontWeight:'bolder'}} href="#">
              Gallery
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;