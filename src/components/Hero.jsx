import React from "react";
import BtnComp from "./BtnComp";
import styled from "styled-components";
import smileEmot from "../images/smile-emot.svg";
import playBlack from "../images/play-black.svg";
import heroImage from "../images/hero-image.png";

const Hero = () => {
  return (
    <HeroStyled>
      <div className="learn-expert">
        <img src={smileEmot} alt="smile-emot" />
        <a href="#">Let's Learn with Expert</a>
      </div>
      <div className="header">
        <div>
          <h2>Choose your future with</h2>
        </div>
        <div className="learn-fun">
          <h2>
            <span className="secondary">learn</span> &{" "}
            <span className="primary">fun</span>.
          </h2>
        </div>
      </div>
      <div className="started">
        <BtnComp type="secondary" path="#">
          Get Started
        </BtnComp>
        <div className="how-it-work">
          <p>How It Work</p>
          <img src={playBlack} alt="playBlack" />
        </div>
      </div>
      <div className="hero-img">
        <img src={heroImage} alt="heroImage" />
        <div className="question"></div>
      </div>
    </HeroStyled>
  );
};

const HeroStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .learn-expert {
    display: flex;
    align-items: center;
    height: 2.5rem;
    padding: 0 1.5rem;
    border-radius: 30px;
    margin: 50px 0 10px;
    background: rgba(54, 207, 90, 0.1);
    cursor: pointer;
    a {
      text-decoration: none;
      color: #36cf5a;
      font-size: 1.2rem;
      font-weight: 600;
    }
    img {
      height: 20px;
      margin-right: 8px;
    }
  }
  .header {
    font-size: 4rem;
    display: flex;
    flex-direction: column;
    /* position: relative; */
    justify-content: center;
    align-items: center;
    .learn-fun {
      /* position: absolute; */
      margin: 0rem auto;
    }
    .primary {
      color: #fd661f;
    }
    .secondary {
      color: #1662f5;
    }
  }
  .started {
    margin-top: 2rem;
    width: 22rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .how-it-work {
      display: flex;
      align-items: center;
      font-size: 1.1rem;
      font-weight: 500;
      img {
        padding-left: 10px;
        height: 20px;
      }
    }
  }
  .hero-img {
    position: relative;
    /* margin-top: 2.5rem; */
    /* top: 0; */
    display: flex;
    justify-content: center;
    img {
      /* position: absolute; */
      /* top: -70px; */
      width: 85%;
      height: 85vh;
      object-fit: cover;
    }
  }
`;

export default Hero;
