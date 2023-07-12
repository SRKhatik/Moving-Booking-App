import React, { useEffect, useState,createContext } from "react";
import Navbar from "../../component/Navbar/Navbar";
import CardsList from "../../component/CardAdmin/CardAdmin";
import { getAllMovies } from "../../api/movies.api";
import { getAllBookings } from "../../api/booking.api";
import { getAllTheatres } from "../../api/theatre.api";
import { getAllUsers } from "../../api/user.api";
import { keys } from "../../utils/constants";
import TheatresTable from "../../component/Tables/TheatresTable/TheatresTable";
import MoviesTable from "../../component/Tables/MoviesTable/MoviesTable";
import BookingsTable from "../../component/Tables/Bookings/Bookings";
import UsersTable from "../../component/Tables/Users/Users";


export const WidgetContext = createContext();

const Admin = () => {
  const [theatresList, setTheatresList] = useState([]);
  const [bookingsList, setBookingsList] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [counterInfo, setCounterInfo] = useState({
    theatres: 0,
    movies: 0,
    bookings: 0,
    users: 0,
  });
  const [showTheatresTable, setShowTheatresTable] = useState(false);
  const [showMoviesTable, setShowMoviesTable] = useState(false);
  const [showBookingsTable, setShowBookingsTable] = useState(false);
  const [showUsersTable, setShowUsersTable] = useState(false);

 

  const show = {};
  show[keys.THEATRE] = showTheatresTable;
  show[keys.MOVIE] = showMoviesTable;
  show[keys.BOOKING] = showBookingsTable;
  show[keys.USER] = showUsersTable;

  const fetchTheatres = async () => {
    const theatres = await getAllTheatres();
    setTheatresList(theatres.data);

    counterInfo.theatres = theatres.data.length;
    setCounterInfo({ ...counterInfo });
  };


const fetchBookings=async()=>{
  const bookings= await getAllBookings()
  setBookingsList(bookings.data)

  counterInfo.bookings = bookings.data.length;
  setCounterInfo({...counterInfo})
}
  const fetchMovies = async () => {
    const movies = await getAllMovies();
    setMoviesList(movies.data);

    counterInfo.movies = movies.data.length;
    setCounterInfo({ ...counterInfo });
  };
  const fetchUsers = async () => {
    const users = await getAllUsers();
    setUsersList(users.data);

    counterInfo.users = users.data.length;
    setCounterInfo({ ...counterInfo });
  };

  const init = async () => {
    await Promise.all([
      fetchTheatres(),
      fetchMovies(),
      fetchBookings(),
      fetchUsers(),
    ]);
  };

  useEffect(() => {
    init();
  }, []);

  const onWidgetClick = (id) => {
    setShowTheatresTable(false);
    setShowMoviesTable(false);
    setShowBookingsTable(false);
    setShowUsersTable(false);

    if (id === keys.THEATRE) {
      setShowTheatresTable(true);
    } else if (id === keys.MOVIE) {
      setShowMoviesTable(true);
    } else if (id === keys.BOOKING) {
      setShowBookingsTable(true);
    } else if (id === keys.USER) {
      setShowUsersTable(true);
    }
    console.log(showBookingsTable);
  };
  return (
    <>
      <div className="vw-100">
        <Navbar />
        <div className="container mt-5 mb-5 cantaier-fulid vh-100%">
          <h2 className="text-center">
            Welcome, {localStorage.getItem("name")}!
          </h2>
          <p className="text-center">Take a quick look at your stats below </p>

          <WidgetContext.Provider value={{ onWidgetClick, show }}>
            <CardsList counterInfo={counterInfo} />
          </WidgetContext.Provider>
          <div>
            {showTheatresTable && <TheatresTable theatresList={theatresList} setTheatersList={setTheatresList} />}
            {showMoviesTable && <MoviesTable moviesList={moviesList}  />}
            {showBookingsTable && <BookingsTable bookingsList={bookingsList} />}
            {showUsersTable && <UsersTable usersList={usersList}/>}
          </div>
        </div>
      </div>
    </>
  );
};
export default Admin;
