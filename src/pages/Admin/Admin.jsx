import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import CardsList from "../../component/CardList/CardList";
import { getAllMovies } from "../../api/movies.api";
import {getAllBookings} from "../../api/booking.api";
import {getAllTheatres} from "../../api/theatre.api";
import {getAllUsers} from "../../api/user.api";

const Admin = () => {
    const [theatresList,setTheatresList] = useState([]);
    const [bookingsList,setBookingsList] = useState([]);
    const [moviesList,setMoviesList] = useState([]);
    const [usersList,setUsersList] = useState([]);
    const [counterInfo,setCounterInfo] = useState({
        theatres: 0,
        movies: 0,
        bookings: 0,
        users: 0,
    })

    const fetchTheatres = async ()=>{
        const theatres = await getAllTheatres();
        setTheatresList(theatres.data);

        counterInfo.theatres = theatres.data.length;
        setCounterInfo({...counterInfo});
    }
    const fetchBookings = async ()=>{
        const bookings = await getAllBookings();
        setBookingsList(bookings.data);

        counterInfo.bookings = bookings.data.length;
        setCounterInfo({...counterInfo});
    }
    const fetchMovies = async ()=>{
        const movies = await getAllMovies();
        setMoviesList(movies.data);

        counterInfo.movies = movies.length;
        setCounterInfo({...counterInfo});
    }
    const fetchUsers = async ()=>{
        const users = await getAllUsers();
        setUsersList(users.data);

        counterInfo.users = users.data.length;
        setCounterInfo({...counterInfo});
    }
    
    const init = async ()=>{
        await Promise.all([fetchTheatres(),fetchMovies(),fetchBookings(),fetchUsers()])
    }

    useEffect(()=>{
        init();
    },[])
  return (
    <>
      <div>
        <Navbar />
        <div className="container mt-5 cantaier-fulid">
          <h1 className="text-center">
            Welcome Bosdkie,{localStorage.getItem("name")}!
          </h1>
          <p className="text-center">Take a quick look at your stats below </p>
         
          <CardsList counterInfo={counterInfo}/>
         
          </div>
      </div>
    </>
  );
};
export default Admin;
