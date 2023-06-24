import React from "react";
import girl from "../../assets/girl.png";

function Cards() {
  return (
    <div className="row m-5 justify-content-center flex-sm-wrap">
    <div
      className="card m-2 row justify-content-center"
      style={{
        backgroundImage: "linear-gradient(150deg, #f731db, #4600f1 100%)",
        width: "14rem",
        height: "15rem",
        border:"2px solid gold",
      }}
    >
      <h4 style={{color:"white", fontSize:"2rem", fontWeight:" bold",
  fontStyle: "italic"}}>
      FRIDAY PRIME SHOW 
      </h4>
    </div>
    <div
      className="card m-2 row justify-content-center"
      style={{
        backgroundImage: "linear-gradient(150deg, 	#008080, #20002c 100% )",
        width: "14rem",
        height: "15rem",
        border:"2px solid gold",
      }}
    >
      <h4 style={{color:"white",fontSize:"2rem", fontWeight:" bold",
  fontStyle: "italic"}}>
       WEEKEND PRIME SHOW 
      </h4>
    </div>
    <div
      className="card m-2 row justify-content-center"
      style={{
        backgroundImage: "linear-gradient(150deg, #39ef74, #4600f1 100%)",
        width: "14rem",
        height: "15rem",
        border:"2px solid gold",
      }}
    >
      <h4 style={{color:"white",fontSize:"2rem", fontWeight:" bold",
  fontStyle: "italic"}}>
      SPECIAL Screeing  SHOW
      </h4>
    </div>
   
    <div
      className="card m-2 row justify-content-center"
      style={{
        backgroundImage: "linear-gradient(150deg, #200122, #6f0000)",
        width: "14rem",
        height: "15rem",
        border:"2px solid gold",
      }}
    >
      <h4 style={{color:"white",fontSize:"2rem", fontWeight:" bold",
  fontStyle: "italic"}}>
        3D PRIME SHOW 
      </h4>
    </div>
    <div
      className="card m-2 row justify-content-center"
      style={{
        backgroundImage: "linear-gradient(150deg, #f731db, #4600f1 100%)",
        width: "14rem",
        height: "15rem",
        border:"2px solid gold",
      }}
    >
      <h4 style={{color:"white",fontSize:"2rem", fontWeight:" bold",
  fontStyle: "italic"}}>
        IMAX Films SHOW 
      </h4>
    </div>
    
        
    </div>
  );
}

export default Cards;
