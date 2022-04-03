import React from "react";
import styled from "styled-components";
import treeImg from "../images/treeImg.png";

const SubContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const FlexContainer = styled.div`
  width: 70vw;
  height: 80vh;

  margin-left: auto;
  margin-right: auto;
  margin-top: 250px;
`;

const SubImg = styled.div`
  width: 292px;
  height: 528px;
  background-image: url(${treeImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SubText = styled.div`
  width: 36vw;
  height: 100vh;
`;

const SubHeader = styled.h1`
  font-size: 90px;
  line-height: 106px;
  text-align: start;
  font-weight: 700;
  color: #333333;
`;

const SubHeaderGreen = styled.h2`
  font-size: 80px;
  line-height: 94px;
  text-align: start;
  font-weight: 700;
  color: #5e7c53;
`;

export const SubPage = () => {
  return (
    <>
      <SubContainer className="text-center">
        <FlexContainer className="flex justify-between">
          <SubText>
            <SubHeader>How</SubHeader>
            <SubHeader>Much do</SubHeader>
            <SubHeader>you know</SubHeader>
            <SubHeader>about</SubHeader>
            <SubHeaderGreen>trees?</SubHeaderGreen>
          </SubText>
          <SubImg />
        </FlexContainer>
      </SubContainer>
    </>
  );
};
