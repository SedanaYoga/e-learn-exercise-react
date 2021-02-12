import React from "react";
import { NavStyled } from "../styles";

import BtnComp from "./BtnComp";
import logo from "../images/logo.svg";

const NavBar = () => {
  return (
    <NavStyled>
      <div className="mac-circles">
        <div className="red"></div>
        <div className="yellow"></div>
        <div className="green"></div>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>E-Learn</p>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Mentors</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="sign-in-up">
        <div className="sign-in">
          <a href="#">Sign In</a>
        </div>
        <BtnComp path="#" type="primary">
          Try for Free
        </BtnComp>
      </div>
    </NavStyled>
  );
};

export default NavBar;
