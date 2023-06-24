import React from "react";
import "./Toogle.css";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useContext } from "react";
import {themeContext} from "../../Context";

export default function Toggle() {

const theme = useContext(themeContext)
const darkMode = theme.state.darkMode

const handleClick =()=>{
  theme.dispatch({type:'toggle'})
}
  return (
    <div className="toggle" onClick={handleClick}>
      <RiMoonFill />
      <RiSunFill />
      <div className="t-button"
      style={darkMode? {left:'2px'}:{right:'2px'}}>

      </div>
    </div>
  );
}