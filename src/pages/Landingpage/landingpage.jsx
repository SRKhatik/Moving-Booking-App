import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Carousel from "../../component/Carousel/Carousel";
import Cantainer from "../../component/Cantainer/Cantainer";
import Cards from "../../component/Cards/Cards";

function Landingpage() {
  return (
    <div>
      <Navbar />
      <Carousel/>
      <Cantainer/> 
      <Cards/>
    </div>
  );
}

export default Landingpage;
