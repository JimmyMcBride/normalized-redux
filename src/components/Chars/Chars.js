import React, { useEffect } from "react";
import styled from "styled-components";
import Char from "./Char";
import HomeButton from "../Global/HomeButton";
import PickleRick from "../../picklerick.png";

import { connect } from "react-redux";
import { getChars } from "../../actions/getChars";
import { Loading } from "../Global/globalStyles";

const Chars = props => {
  const { chars, getChars, getting } = props;
  useEffect(() => {
    getChars();
  }, [getChars]);

  if (getting) {
    return (
      <Loading>
        <img src={PickleRick} alt="Pickle Rick" />
      </Loading>
    );
  }
  return (
    <CharsWrapper>
      <HomeButton />
      <h2>Rick and Morty Characters</h2>
      {console.log(chars)}
      <CharList>
        {chars.map(char => {
          return <Char key={char.id} char={char} />;
        })}
      </CharList>
    </CharsWrapper>
  );
};

const CharsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const mapStateToProps = state => {
  return {
    chars: state.getChars.chars,
    getting: state.getChars.getting
  };
};

export default connect(
  mapStateToProps,
  { getChars }
)(Chars);
