import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieSearch from "./components/MovieSearch";
import ErrorPage from "./components/ErrorPage";
import MovieDetails from "./components/MovieDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieSearch />} />
      <Route path="movie/:id" element={<MovieDetails />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
