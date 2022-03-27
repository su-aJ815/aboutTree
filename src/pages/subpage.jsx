import React from "react";
import styled from "styled-components";
import treeImg from "../images/treeImg.png";

const SubImg = styled.div`
  width: 40vw;
  height: 40vh;
  background-image: url(${treeImg});
  background-position: center;
  background-repeat: none;
  background-size: cover;
`;

export const SubPage = () => {
  return (
    <>
      <SubImg />
    </>
  );
};
