import React from "react";
import logo from "../../logo.svg";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Char = () => {
  return (
    <>
      <Link to="/">
        <Logo src={logo} className="Counter-logo" alt="logo" />
      </Link>
    </>
  );
};

const Logo = styled.img`
  height: 16rem;
`;

export default Char;
