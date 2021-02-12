import React from "react";
import styled from "styled-components";

const BtnComp = ({ path, type, children }) => {
  return (
    <BtnStyled type={type}>
      <a href={path}>{children}</a>
    </BtnStyled>
  );
};

const BtnStyled = styled.div`
  padding: 0rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  border-radius: 30px;
  a {
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    font-size: 1.5rem;
    text-decoration: none;
  }
  background: ${(props) => (props.type === "primary" ? "#fd661f" : "#1662f5")};
  :hover {
    background: ${(props) =>
      props.type === "primary" ? "#c94406" : "#0c41a8"};
  }
`;

export default BtnComp;
