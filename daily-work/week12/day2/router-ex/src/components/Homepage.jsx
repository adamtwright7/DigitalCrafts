import React from "react";
import Info from "./Info";

const Homepage = ({ currentPokemonData }) => {
  return (
    <div>
      <h2>Welcome to the PokeDex!</h2>

      <h4>You've caught the following Pokemon:</h4>

      {currentPokemonData.map((pokemon) => (
        <Info pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Homepage;
