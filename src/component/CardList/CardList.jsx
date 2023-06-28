import React from 'react';
import { CWidgetStatsC } from "@coreui/react";
import { Building, CardList, Film, PeopleFill} from 'react-bootstrap-icons';

function CardsList(props) {
const {counterInfo} = props;
  return (
    <div className="row px-1">
    <div className="col ">
      <CWidgetStatsC
        color="success"
        progress={{ value: counterInfo.theatres }}
        icon={<Building style={{fontSize:"40px",color:"white"}}/>}
        text="Number of Theatres"
        title="Theatres"
        value={counterInfo.theatres}
      />
    </div>
    <div className="col">
      <CWidgetStatsC
         color="success"
         progress={{ value: counterInfo.movies }}
         icon={<Film style={{fontSize:"40px",color:"white"}}/>}
         text="Number of Movies"
         title="Movies"
         value={counterInfo.movies}
      />
    </div>
    <div className="col">
      <CWidgetStatsC
      color="success"
      progress={{ value: counterInfo.bookings }}
      icon={<CardList style={{fontSize:"40px",color:"white"}}/>}
      text="Number of Bookings"
      title="Bookings"
      value={counterInfo.bookings}
      />
    </div>
    <div className="col">
      <CWidgetStatsC
      color="success"
      progress={{ value: counterInfo.users }}
      icon={<PeopleFill style={{fontSize:"40px",color:"white"}}/>}
      text="Number of Users"
      title="Users"
      value={counterInfo.users}
      />
    </div>
  </div>
  )
}

export default CardsList;