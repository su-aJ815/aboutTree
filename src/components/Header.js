import React from "react";
import styled from "styled-components";
import { Link, Router, useNavigate } from "react-router-dom";

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
  width: 160px;
  font-size: 12px;
  line-height: 6vh;
`;

const Header = () => {
  return (
    <Positioner className="fixed z-50 flex">
      <Logo className="text-left ml-20 font-medium">aboutTree</Logo>
      <Menu className="flex list-none justify-between ml-16">
        <li>About</li>
        <li>About</li>
        <li>About</li>
      </Menu>
    </Positioner>
  );
};

export default Header;
