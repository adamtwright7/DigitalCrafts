import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchMovie } from "../reducers/movieSlice";
import { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const MovieSearch = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  console.log(movies);

  const [movieToSearch, setMovieToSearch] = useState("");

  const APIcall = async () => {
    let url = "http://www.omdbapi.com/?apikey=9faa7dec&s=" + movieToSearch;
    const rawData = await fetch(url);
    const readableData = await rawData.json();
    dispatch(searchMovie(readableData.Search));
  };

  return (
    <div>
      <Navbar />
      <h2>Search Movies</h2>
      <input type="text" onChange={(e) => setMovieToSearch(e.target.value)} />
      {/* Still need to find a way to clear the input when the button is pressed */}
      <button onClick={() => APIcall()}>Search Movies</button>
      {movies?.map((movie) => {
        return (
          <>
            <p> {movie?.Title} </p>
            <p> {movie?.Year} </p>
            <img src={movie?.Poster} />
            <Link to={"movie/" + movie?.imdbID}>Check out the details</Link>
          </>
        );
      })}
    </div>
  );
};

export default MovieSearch;
