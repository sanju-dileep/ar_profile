import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import ARCH from "../../assets/arch.jpg";
import BlurBg from "../BlurBg/BlurBg";

function Navbar() {
  const [navActive, setNavActive] = useState(false)

  const handleNavigation = () =>{
    setNavActive(!navActive)
  }

  const handleResize =() => {
    setNavActive(false)
    console.log('dfdf');
  }
  
  window.addEventListener('resize', handleResize)

  return (
    <nav>
      <div className="navContainer">
        <div className="leftNav">
          <img src={ARCH} className={`brandLogo ${!navActive && 'dNoneBrandLogo'}`} alt="" />
        </div>
        <div className={`rightNav ${!navActive && 'showNavBar'}`}>
          <img src={ARCH} alt="arch" className="respBrandLogo" />
          <NavLink to="/" className="navLink">
            Home
          </NavLink>
          <NavLink to="/about" className="navLink">
            About
          </NavLink>
          <NavLink to="/portfolio" className="navLink">
            Protfolio
          </NavLink>
          <NavLink to="/services" className="navLink">
            Services
          </NavLink>
          <NavLink to="/contacts" className="navLink">
            Contacts
          </NavLink>
        </div>
        <div className="hamburgurMenuBar" onClick={handleNavigation}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {!navActive && <BlurBg color='none' handleNavigation={handleNavigation} />}
    </nav>
  );
}

export default Navbar;
