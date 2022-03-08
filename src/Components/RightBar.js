import React from "react";
import "../Styles/RightBar.css";
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCogs } from "react-icons/fa";
import Profile from "../img/profile.png";

function RightBar() {
  return (
    <div className="rightBar">
      <div className="profile">
        <div className="profileImage">
          <img src={Profile} alt="" />
        </div>
        <i>
          <FaRegHeart />
        </i>
        <i>
          <FaSun />
        </i>
        <i>
          <FaCogs />
        </i>
      </div>
      <div className="goPro">
        <i>
          <FaCrown />
          <p>
            <span> Go</span>Pro
          </p>
        </i>
        <i>
          <FaBell />
        </i>      
      </div>
    </div>
  );
}

export { RightBar };
