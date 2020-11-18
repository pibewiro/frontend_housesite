import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  let history = useHistory();
  let location = useLocation();
  let navUnderline = <div className="nav-selected"></div>;

  const handleLoginPage = () => {
    history.push('/login');
  }

  const handleNavbar = () => {
    let el = document.querySelector(".site-navbar ul");
    if (el.style.left === "0px") {
      el.style.left = "-100%";
    } else {
      el.style.left = 0;
    }
  };
  return (
    <div>
      <div className="site-navbar">
        <div className="sn-logo">
          <div className="ham-div" onClick={handleNavbar}>
            <span></span>
          </div>
          <h1><Link to="/">Housesite</Link></h1>
        </div>
        <ul className="sn-items">
          <li id="home">
            <Link to="/">Home</Link>
            <div className="nav-underline"></div>
            {location.pathname === "/" ? navUnderline : null}
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
            <div className="nav-underline"></div>
            {location.pathname === "/contact" ? navUnderline : null}
          </li>
          <li>
            <Link to="/about">About</Link>
            <div className="nav-underline"></div>
            {location.pathname === "/about" ? navUnderline : null}
          </li>
        </ul>
        <div className="nav-btn">
          <button className="site-btn-dark btn-outline-light" onClick={handleLoginPage}>
            Login or Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
