import MovieCard from "../MovieCard/MovieCard";
import React from "react";

function MovieList(props) {
  const renderMovies = (movies) => {
    return movies.map((movie,index) => {
      return <MovieCard key={index} movie={movie} />;
    });
  };

  return (
    <div className="py-3">
<h1 className="m-5" style={{ color: "black", fontWeight: 900, textDecoration: "underline" }}>RECOMMENDED MOVIES</h1>

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
