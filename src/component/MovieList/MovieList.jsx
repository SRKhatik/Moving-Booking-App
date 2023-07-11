import MovieCard from "../MovieCard/MovieCard";
import React from "react";
function MovieList(props){

  const renderMovies = (movies)=>{
      return  moviesData.map((movie)=>{
          return <MovieCard  movie={movie} />
         }) ;
  }
  const {moviesData} = props;
  return (
    <div className="py-3">
<h1 className="m-5" style={{ fontWeight: 900, textDecoration: "underline" }}>RECOMMENDED MOVIES</h1>

      <div
        style={{ flexFlow: "wrap" }}
        className=" d-flex justify-content-center"
      >
        {renderMovies()}
      </div>
    </div>
  );
}

export default MovieList;