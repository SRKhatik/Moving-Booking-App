import React, { useState } from "react";
import CWidgetComponent from "../CWidget/CWidget";
import { Building, CardList, Film, PeopleFill } from "react-bootstrap-icons";
import {keys} from "../../utils/constants"

function CardsList(props) {
  const { counterInfo } = props;

  return (
    <div className="row px-1">
      <div className="col">
        <CWidgetComponent
          id={keys.THEATRE}
          value={counterInfo.theatres}
          progress={{ value: counterInfo.theatres }}
          icon={<Building style={{ fontSize: "40px", color: "white" }} />}
          text="Number of Theatres"
          title="Theatres"
        />
      </div>
      <div className="col">
        <CWidgetComponent
          id={keys.MOVIE}
          value={counterInfo.movies}
          progress={{ value: counterInfo.movies}}
          icon={<Film style={{ fontSize: "40px", color: "white" }} />}
          text="Number of Movies"
          title="Movies"
        />
      </div>
      <div className="col">
        <CWidgetComponent
          id={keys.BOOKING}
          value={counterInfo.bookings}
          progress={{ value: counterInfo.bookings }}
          icon={<CardList style={{ fontSize: "40px", color: "white" }} />}
          text="Number of Bookings"
          title="Bookings"
        />
      </div>
      <div className="col ">
        <CWidgetComponent
          id={keys.USER}
          value={counterInfo.users}
          progress={{ value: counterInfo.users }}
          icon={<PeopleFill style={{ fontSize: "40px", color: "white" }} />}
          text="Number of Users"
          title="Users"
        />
      </div>
    </div>
  );
}


export default CardsList;
