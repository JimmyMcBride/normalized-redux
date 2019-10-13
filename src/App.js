import React from "react";

// Set up all routes in App
import { Route } from "react-router-dom";

// Using styled components for some styles affecting whole app
import styled from "styled-components";
// Importing all routes
import HomePage from "./components/HomePage/HomePage";
import ReduxCounter from "./components/ReduxCounter/ReduxCounter";
import Chars from "./components/Chars/Chars";
import SoloChar from "./components/SoloChar/SoloChar";

const App = () => {
  return (
    <AppWrapper>
      <Route path="/" exact component={HomePage} />
      <Route path="/counter" component={ReduxCounter} />
      <Route path="/chars" exact component={Chars} />
      <Route path="/chars/:id" component={SoloChar} />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
  a {
    color: slateblue;
  }
  a:hover {
    color: darkslateblue;
    text-decoration: none;
  }
`;

export default App;
