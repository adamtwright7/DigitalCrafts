import React from "react";
import { useSelector, useDispatch } from "react-redux";
// We're only using redux here as part of a learning exercise. This could be accomplished with state without variable passing.
import { searchMovie } from "../reducers/movieSlice";
import { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const MovieSearch = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const [movieToSearch, setMovieToSearch] = useState("");

  const APIcall = async () => {
    let url =
      "http://www.omdbapi.com/?apikey=" +
      import.meta.env.VITE_APIkey +
      "&s=" +
      movieToSearch;
    const rawData = await fetch(url);
    const readableData = await rawData.json();
    dispatch(searchMovie(readableData.Search));
  };

  // This debounce function registers the first keypress and ignores subsequent key presses.
  // Instead, I want to ignore the first few keypressed until there is a wait.
  function debounce(func, timeout = 500) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  return (
    <div className="bg-[#0a0022] min-h-screen">
      <Navbar />
      <input
        className="flex w-screen bg-gradient-to-b from-[rgba(117,117,117,1)] to-[rgba(199,199,199,1)] p-16 text-white text-[6vh] h-[10vh]"
        // since both the text size and height of the input field are based on the height of the viewport, both will be responsive and scale with each other.
        // Specifically, the text will stay 60% the height of the input field.
        type="text"
        onChange={(e) => {
          setMovieToSearch(e.target.value);
          debounce(APIcall());
        }}
      />

      <div id="movieGrid" className="grid grid-cols-4 p-14 gap-4">
        {movies?.map((movie) => {
          return (
            <div className="flex justify-center">
              <Link to={"movie/" + movie?.imdbID}>
                <img src={movie?.Poster} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieSearch;
