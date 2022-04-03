import React, { useState } from "react";
import styled from "styled-components";
import { ColorSystem } from "../utils/colorSystem";
import { Link, Router, useNavigate } from "react-router-dom";

const List = styled.li`
  line-height: 6vh;
  font-size: 16px;
  font-weight: 500;
`;

const HeaderList = (props) => {
  const [isHovering, SetIsHovering] = useState(0);
  return (
    <List
      onMouseOver={() => SetIsHovering(1)}
      onMouseOut={() => SetIsHovering(0)}
    >
      {isHovering ? (
        <p style={{ color: ColorSystem.TextColor.hover }}>{props.menu}</p>
      ) : (
        <p style={{ color: ColorSystem.TextColor.default }}>{props.menu}</p>
      )}
    </List>
  );
};

export default HeaderList;
