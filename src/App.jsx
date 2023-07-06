import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import Landingpage from "./pages/Landingpage/landingpage";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import MovieTheatres from "./pages/MovieTheatres/MovieTheatres";
import { themeContext } from "./Context";
import { useContext } from "react";
import Admin from "./pages/Admin/Admin";
import SeatBooking from "./pages/SeatBooking/SeatBooking";
import AuthHOC from "./hoc/AuthHOC";

function App() {
  const theme =useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background : darkMode? 'black':'',
      color:darkMode? "white":"",
    }}>
    <Router>
      <Routes>
        <Route exact path="/login" element={<Auth/>} />
        <Route exact path="/register" />
        <Route exact path="/" element={<Landingpage/>} />
        <Route exact path="/movie/:movieId/details" element={<MovieDetails/> } />
        <Route exact path="/buyTickets/:movieId" element={<AuthHOC><MovieTheatres/> </AuthHOC>} />
        <Route exact path="/buyTickets/:movieId/:theatreId" element={<AuthHOC> <SeatBooking/> </AuthHOC>}/>
        <Route exact path="/admin" element={ <Admin/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
