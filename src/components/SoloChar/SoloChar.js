import React, { useEffect } from "react";
import styled from "styled-components";
import HomeButton from "../Global/HomeButton";
import PickleRick from "../../picklerick.png";
import Solo from "./Solo";

import { connect } from "react-redux";
import { getCharById } from "../../actions/getCharById";
import { Link } from "react-router-dom";
import { Loading } from "../Global/globalStyles";

const SoloChar = props => {
  const { char, getCharById, match, getting } = props;
  useEffect(() => {
    getCharById(match.params.id);
  }, [getCharById, match.params.id]);

  if (getting) {
    return (
      // I'm pickle Rick!!!
      <Loading>
        <img src={PickleRick} alt="Pickle Rick" />
      </Loading>
    );
  }

  return (
    <CharsWrapper>
      <HomeButton />
      <Link to="/chars">Rick and Morty Character List</Link>
      <Solo char={char} />
    </CharsWrapper>
  );
};

const CharsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const mapStateToProps = state => {
  return {
    char: state.getCharById.char,
    getting: state.getCharById.getting
  };
};

export default connect(
  mapStateToProps,
  { getCharById }
)(SoloChar);
