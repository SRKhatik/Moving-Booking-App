import { useEffect, useState } from "react";
import { getTheatresForAMovie } from "../../api/theatre.api";
import Navbar from "../../component/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../api/movies.api";
import { Spinner } from "react-bootstrap";
import TheatreDetails from "../../component/TheatreDetails/TheatreDetails";


const MovieTheatres = () => {
  const { movieId: selectedMovie } = useParams();
  const [theatresDetail, setTheatersDetails] = useState();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
 

  const getTheatres = async () => {
    const theatresData = await getTheatresForAMovie(selectedMovie);
    setTheatersDetails(theatresData.data);
  };

  const getMoviesDetails = async () => {
    const movieDetails = await getMovieById(selectedMovie);
    console.log(movieDetails);
    setMovieDetails(movieDetails.data);
  };
  const init = async () => {
    await Promise.all([getTheatres(), getMoviesDetails()]);
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      <Navbar />
    
      {isLoading && <Spinner/>}
      {
        !isLoading && <div style={{minHeight:"100vh" , marginTop:"3rem"}} className=" text-center pt-4">
           <h2 className="fw-bolder">{movieDetails.name}</h2>
           <div>
                    <span> {movieDetails.description} </span>

                    <div style={{cursor:"pointer"}}>
                        <span className="badge text-bg-danger rounded-pill m-2 "> {movieDetails.language} </span>
                        <span className="badge text-bg-danger rounded-pill m-2 "> {movieDetails.releaseStatus} </span>

                    </div>
                    <hr/>
                    <h6 className="text-justify "> Directed by {movieDetails.director}</h6>
                    <h6 className="text-justify "> Released On  {movieDetails.releaseDate}</h6>

                    <br/>
           </div>
           <div style={{width:"70vw", margin:"0 auto"}}>
        <TheatreDetails theatresDetail={theatresDetail} selectedMovie={selectedMovie}/>
           </div>
            </div>
      } 
    </div>
  );
};
export default MovieTheatres;
