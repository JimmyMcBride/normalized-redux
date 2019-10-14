import React from "react";

import { Link } from "react-router-dom";
import { CharCard } from "../Global/globalStyles";

const Char = ({ char }) => {
  return (
    <CharCard>
      <Link to={`/chars/${char.id}`} key={char.id}>
        <p>{char.name}</p>
        <img src={char.image} alt="profile pic" />
      </Link>
      <p>{char.species}</p>
      <p>{char.gender}</p>
      <p>{char.origin.name}</p>
      {console.log(char)}
    </CharCard>
  );
};

export default Char;
