import React from "react";
import "./BlurBg.css";

function BlurBg({ color ,handleNavigation }) {
  return <div onClick={handleNavigation} className="color"></div>;
}

export default BlurBg;
