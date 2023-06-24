import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import Landingpage from "./pages/Landingpage/landingpage";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme =useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background : darkMode? 'gray':'',
      color:darkMode? "white":"",
    }}>
    <Router>
      <Routes>
        <Route exact path="/login" element={<Auth/>} />
        <Route exact path="/register" />
        <Route exact path="/" element={<Landingpage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
