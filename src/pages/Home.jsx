import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

import { ContainerStyled, BgStyled, MainStyled } from "../styles.js";

const Home = () => {
  return (
    <MainStyled>
      <ContainerStyled>
        <NavBar />
        <Hero />
      </ContainerStyled>
      <BgStyled>
        <div className="circles-top">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
        </div>
        <div className="circles-bot">
          <div className="circle4"></div>
          <div className="circle5"></div>
          <div className="circle6"></div>
        </div>
        <div className="circles-bot-left">
          <div className="circle7"></div>
          <div className="circle8"></div>
          <div className="circle9"></div>
        </div>
      </BgStyled>
    </MainStyled>
  );
};

export default Home;
