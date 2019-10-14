import React from "react";
import { CharCard } from "../Global/globalStyles";

const Solo = ({ char }) => {
  return (
    <CharCard>
      <p>{char.name}</p>
      <img src={char.image} alt="profile pic" />
      <p>{char.status}</p>
      <p>{char.species}</p>
      <p>{char.gender}</p>
      {/* char.origin returns an object with a name and url // if I do //
        char.origin.name or char.origin.url it breaks the code for some reason */}
      {/* it works fine on the Char component */}
      {/* {console.log(char.location)} */}
    </CharCard>
  );
};

export default Solo;
