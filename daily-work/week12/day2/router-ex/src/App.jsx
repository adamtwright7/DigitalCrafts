import React from "react";
import "./App.css";
import Homepage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { pokemonData } from "./assets/pokemonData";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [currentPokemonData, setPokemonData] = useState(pokemonData);
  return (
    <Routes>
      <Route
        path="/"
        element={<Homepage currentPokemonData={currentPokemonData} />}
      />
      <Route path="/pokemoncard" element={<PokemonCard />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
