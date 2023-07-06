import { CSpinner } from "@coreui/react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../component/Navbar/Navbar";
import { getMovieById } from "../../api/movies.api";
import { Button } from "react-bootstrap";

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState( );
  const { movieId } = useParams();

  const fetchMovieDetails = async () => {
 
    const movieDetails = await getMovieById(movieId);

    setMovieDetails(movieDetails.data);
    
  };

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return (
    <div className="vw-100">
      <Navbar />
      {movieDetails ? (
        <>
          <div className="bg-dark mt-5 " style={{ border: "3px solid black" }}>
            <ReactPlayer
              url={movieDetails.trailerUrl}
              controls={true}
              width="100%"
              height="60vh"
            />
          </div>
    
          <div style={{ padding: "40px"}} className="row my-4 py-10">
            <div className="col-lg-3 col-md-12">
              <img
                src={movieDetails.posterUrl}
                width={300}
                height={400}
                alt="Movie Poster"
              />
            </div>
            <br />
            <div className="col-lg-9 col-md-12 justify-content-start ">
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
                <h6 >
                  Directed by {movieDetails.director}
                </h6>
                <h6 >
                  Released On {movieDetails.releaseDate}
                </h6>

                <br />

                <div>
                  <h5>Cast</h5>
                  <p>
                    {movieDetails.casts.map((name, index) => (
                      <li key={index}>{name}</li>
                    ))}
                  </p>
                </div>

                <div className="my-3">
               
                  <Link to={`/buyTickets/${movieId}`}> 
                  <Button className="text-white" variant="danger">
                    Book Tickets
                  </Button></Link>
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
