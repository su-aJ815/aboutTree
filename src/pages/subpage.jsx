import React from "react";
import styled from "styled-components";
import treeImg from "../images/treeImg.png";

const SubContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const SubImg = styled.div`
  width: 250px;
  height: 450px;
  background-image: url(${treeImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const SubPage = () => {
  return (
    <>
      <SubContainer>
        <SubImg />
      </SubContainer>
    </>
  );
};
