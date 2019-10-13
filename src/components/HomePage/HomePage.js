import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <HomeWrapper>
      <h1>Welcome to the Normalize/Redux project!</h1>
      <Link to="/counter">Redux Counter</Link>
      <Link to="/chars">Rick and Morty Characters</Link>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export default HomePage;
