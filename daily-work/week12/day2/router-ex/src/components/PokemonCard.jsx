import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const PokemonCard = () => {
  const [pokeCardState, setPokeCardState] = useState({});
  const location = useLocation();
  let pokeurl = location.state;

  useEffect(() => {
    const getPokeData = async (pokeurl) => {
      const rawData = await fetch(pokeurl);
      const detailedPokeData = await rawData.json();
      setPokeCardState(detailedPokeData);
    };

    getPokeData(pokeurl);
  }, []);

  return (
    <div>
      <Link to="/">Back to PokeDex</Link>
      <br />
      <h2>{pokeCardState?.name}</h2>
      <img src={pokeCardState?.sprites?.front_default} alt="" />

      <br />
      <p> Moves: </p>
      {pokeCardState?.moves?.slice(0, 3).map((move) => (
        <h3> {move?.move?.name} </h3>
      ))}
    </div>
  );
};

export default PokemonCard;
