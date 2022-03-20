import React, { useState } from "react";
import styled from "styled-components";
import { ColorSystem } from "../utils/colorSystem";
import { Link, Router, useNavigate } from "react-router-dom";
import HeaderList from "./HeaderList";

const Positioner = styled.div`
  width: 100vw;
  height: 6vh;
  background-color: #dfffff;
`;

const Logo = styled.div`
  font-size: 18px;
  line-height: 6vh;
`;

const Menu = styled.div`
  width: 186px;
  font-size: 12px;
  line-height: 6vh;
`;

const Header = () => {
  return (
    <Positioner className="fixed z-50 flex">
      <Logo
        className="text-left ml-20 font-medium"
        style={{ color: ColorSystem.TextColor.default }}
      >
        aboutTree
      </Logo>
      <Menu className="flex list-none justify-between ml-16">
        <HeaderList menu="About" />
        <HeaderList menu="Dictionary" />
        <HeaderList menu="Labgirl" />
      </Menu>
    </Positioner>
  );
};

export default Header;
