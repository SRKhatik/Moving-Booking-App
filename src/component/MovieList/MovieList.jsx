import MovieCard from "../MovieCard/MovieCard";
import React from "react";

function MovieList(props) {
  const renderMovies = (movies) => {
    return movies.map((movie,index) => {
      return <MovieCard key={index} movie={movie} />;
    });
  };

  return (
    <div className=" mt-5 mb-5 py-3">
      <h1>Recommended Movies</h1>
      <div
        style={{ flexFlow: "wrap" }}
        className=" d-flex justify-content-center"
      >
        {renderMovies(props.moviesData)}
      </div>
    </div>
  );
}

export default MovieList;
