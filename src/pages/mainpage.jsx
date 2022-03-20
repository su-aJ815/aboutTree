import React from "react";
import styled from "styled-components";
import { ColorSystem } from "../utils/colorSystem";
import mainImg1 from "../images/mainImg1.png";

const MainImg = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${mainImg1});
  background-position: center;
  background-repeat: none;
  background-size: cover;
`;

const MainText = styled.h1`
  color: #333333;
  font-weight: 700;
  font-size: 20px;
  padding-top: 190px;
  text-shadow: 1px 1px 3px #e3e3e3;
`;

export const MainPage = () => {
  return (
    <MainImg>
      <MainText>This is one of the few things humans cannot make.</MainText>
    </MainImg>
  );
};
