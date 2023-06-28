import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../api/movies.api";
import { CSpinner } from "@coreui/react";

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  const fetchMovieDetails = async () => {
    try {
      const movieResponse = await getMovieById(movieId);
      setMovieDetails(movieResponse);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <div>
      <Navbar />
      {movieDetails ? (
        <>
          <div className="bg-dark mt-5 " style={{ border: "3px solid black" }}>
            <ReactPlayer
              url={movieDetails.trailerUrl}
              controls={true}
              width="100%"
              height="50vh"
            />
          </div>
    
          <div style={{ padding: "40px"}} className="row my-4 py-10">
            <div className="col-lg-3 col-md-12">
              <img
                src={movieDetails.posterUrl}
                width={300}
                height={500}
                alt="Movie Poster"
              />
            </div>
            <br />
            <div className="col-lg-9 col-md-12 ">
              <h2 className="font-weight-bold">About the Movie</h2>

              <div>
                <span>{movieDetails.description}</span>

                <div>
                  <span className="badge bg-danger rounded-pill m-2 text-white">
                    {movieDetails.language}
                  </span>
                  <span className="badge bg-danger rounded-pill m-2 text-white">
                    {movieDetails.releaseStatus}
                  </span>
                </div>

                <hr />

                <h3>{movieDetails.name}</h3>
                <h6 className="text-justify">
                  Directed by {movieDetails.director}
                </h6>
                <h6 className="text-justify">
                  Released On {movieDetails.releaseDate}
                </h6>

                <br />

                <div>
                  <h5>Cast</h5>
                  <ul>
                    {movieDetails.casts.map((name, index) => (
                      <li key={index}>{name}</li>
                    ))}
                  </ul>
                </div>

                <div className="my-3">
                  <button className="btn btn-danger text-white">
                    Book Tickets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center mt-5">
          <CSpinner color="warning" variant="grow" />
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
