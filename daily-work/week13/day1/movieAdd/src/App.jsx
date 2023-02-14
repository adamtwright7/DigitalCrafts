import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./reducers/counterSlice";
import { addMovie } from "./reducers/movieSlice";
import { useState } from "react";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const [movieToAdd, setMovieToAdd] = useState("");

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>The current count is {count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <h2>Check out these movies</h2>
      {movies.map((movie) => (
        <p> {movie?.name} </p>
      ))}
      <input type="text" onChange={(e) => setMovieToAdd(e.target.value)} />
      <button onClick={() => dispatch(addMovie({ name: movieToAdd }))}>
        Add Movie
      </button>
      <hr />
    </div>
  );
}
