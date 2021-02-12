import styled from "styled-components";

export const MainStyled = styled.div`
  background: #fff;
  position: relative;
  z-index: 0;
`;

export const BgStyled = styled.div`
  .circles-top {
    position: absolute;
    display: flex;
    z-index: 1;
    filter: blur(100px);
    transform: rotate(45deg);
    top: 0;
    right: 5%;
    div {
      height: 300px;
      width: 100px;
    }
    .circle1 {
      background-color: #1662f5;
    }
    .circle2 {
      background-color: #fd661f;
    }
    .circle3 {
      background-color: #ffd333;
    }
  }
  .circles-bot {
    position: absolute;
    display: flex;
    z-index: 1;
    filter: blur(120px);
    transform: rotate(90deg);
    bottom: 10%;
    right: 10%;
    div {
      height: 270px;
      width: 90px;
    }
    .circle4 {
      background-color: #1662f5;
    }
    .circle5 {
      background-color: #fd661f;
    }
    .circle6 {
      background-color: #ffd333;
      width: 50px;
    }
  }
  .circles-bot-left {
    position: absolute;
    display: flex;
    z-index: 1;
    filter: blur(200px);
    transform: rotate(300deg);
    bottom: 0%;
    left: 0%;
    div {
      height: 600px;
      width: 200px;
    }
    .circle7 {
      background-color: #ffd333;
    }
    .circle8 {
      background-color: #1662f5;
      width: 100px;
    }
    .circle9 {
      background-color: #36cf5a;
    }
  }
`;

export const ContainerStyled = styled.div`
  min-height: 90vh;
  margin: 4.5rem 4rem;
  position: relative;
  padding: 3rem 5rem;
  position: relative;
  z-index: 2;
  border: 1px solid #fff;
  border-radius: 20px;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  top: 0;
  left: 0;
  z-index: 2;
`;

export const NavStyled = styled.div`
  display: flex;
  align-items: center;
  z-index: 3;
  .mac-circles {
    position: absolute;
    display: flex;
    align-items: center;
    top: 20px;
    left: 30px;
    div {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      margin: 0rem 0.2rem;
    }
    .red {
      background: #fe7461;
    }
    .yellow {
      background: #ffd84c;
    }
    .green {
      background: #80d69e;
    }
  }
  .logo {
    flex: 0.6;
    font-weight: bold;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 2rem;
    img {
      padding-right: 10px;
      height: 80px;
    }
  }
  .menu {
    flex: 1;
    font-weight: 600;
    font-size: 1.5rem;
    ul {
      display: flex;
      list-style: none;
      justify-content: space-between;
    }
    li {
      a {
        text-decoration: none;
        color: #bcbcbc;
        :hover {
          font-weight: bold;
          color: #000;
          position: relative;
          /* border-bottom: 3px solid #000; */
          :before {
            content: "";
            position: absolute;
            bottom: 100%;
            height: 1px;
            width: 50%;
            border-bottom: 5px solid #1662f5;
          }
        }
      }
    }
  }
  .sign-in-up {
    flex: 0.8;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: 600;
    font-size: 1.5rem;
    .sign-in {
      padding: 0rem 3rem;
      a {
        color: #555;
        text-decoration: none;
        :hover {
          font-weight: bold;
          color: #000;
        }
      }
    }
  }
`;
