import React, { useState, useEffect } from "react";
import Navbar from "../../component/Navbar/Navbar";
import Carousel from "../../component/Carousel/Carousel";
import Cantainer from "../../component/Cantainer/Cantainer";
import Cards from "../../component/Cards/Cards";
import { getAllMovies } from "../../api/movies.api";
import { CSpinner } from "@coreui/react";
import MovieList from "../../component/MovieList/MovieList";

let allMovieData = [];

function Landingpage() {
  const [moviesData, setMoviesData] = useState([]);

  const filterMovies = (searchValue) => {
      const filteredMovies = allMovieData.filter((movie) => {
      const movieName = movie.name.toLowerCase();
      return movieName.startsWith(searchValue.toLowerCase());
    });
    setMoviesData(filteredMovies);
  };

  const fetchMovies = async () => {
    try {
      const movies = await getAllMovies();
      allMovieData = movies.data;
      setMoviesData(movies.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Navbar filterMovies={filterMovies} />
      <Carousel />
      <Cantainer />
      <Cards />
      <div className="text-center">
        {moviesData === null ? (
          <CSpinner color="primary" variant="grow" />
        ) : (
          <MovieList moviesData={moviesData} />
        )}
      </div>
    </div>
  );
}

export default Landingpage;
