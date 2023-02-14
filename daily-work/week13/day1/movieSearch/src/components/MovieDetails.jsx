import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const MovieDetails = () => {
  const { id } = useParams();

  const APIcallDetails = async () => {
    let url = "http://www.omdbapi.com/?apikey=9faa7dec&i=" + id;
    const rawData = await fetch(url);
    const readableData = await rawData.json();
    console.log(readableData);
  };

  APIcallDetails();

  return (
    <div>
      <Navbar />
      <h2>MovieDetails</h2>
      <h3>The current movie ID is: {id} </h3>
    </div>
  );
};

export default MovieDetails;
