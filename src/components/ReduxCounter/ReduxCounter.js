import React from "react";

import styled from "styled-components";
import HomeButton from "../Global/HomeButton";

import { Button } from "reactstrap";
import { connect } from "react-redux";
import { increment, decrement } from "../../actions/counter";

const ReduxCounter = props => {
  return (
    <>
      <Header>
        <HomeButton />
        <Btn className="Counter-link" onClick={() => props.increment()}>
          ++
        </Btn>
        <p>
          Clicked <code>{props.count}</code> times
        </p>
        <Btn className="Counter-link" onClick={() => props.decrement()}>
          --
        </Btn>
      </Header>
    </>
  );
};

const Header = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  p {
    margin-top: 1rem;
    margin-right: 1.4rem;
    code {
      font-size: 5vw;
    }
  }
`;

const Btn = styled(Button)`
  color: #09d3ac;
  border: 2px solid #09d3ac;
  background: none;
  &:hover {
    color: #282c34;
    background: #09d3ac;
    border-color: #09d3ac;
    font-weight: bold;
  }
`;

const mapStateToProps = state => {
  return {
    count: state.counter.count
  };
};

export default connect(
  mapStateToProps,
  { increment, decrement }
)(ReduxCounter);
