import React from "react";
import { Link } from "react-router-dom";

const Info = ({ pokemon }) => {
  return (
    <div>
      <Link to="/pokemoncard" state={pokemon.url}>
        <p>{pokemon.name}</p>
      </Link>
    </div>
  );
};

export default Info;
