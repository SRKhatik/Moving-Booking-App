import React, { useState, useEffect } from "react";
import Navbar from "../../component/Navbar/Navbar";
import Carousel from "../../component/Carousel/Carousel";
import Cantainer from "../../component/Cantainer/Cantainer";
import Cards from "../../component/Cards/Cards";
import { getAllMovies } from "../../api/movie.api";
import { CSpinner } from "@coreui/react";
import MovieList from "../../component/MovieList/MovieList";

function Landingpage() {
  const [moviesData, setMoviesData] = useState(null);

  const fetchMovies = async () => {
    try {
      const movies = await getAllMovies();
      setMoviesData(movies);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <Navbar />
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
