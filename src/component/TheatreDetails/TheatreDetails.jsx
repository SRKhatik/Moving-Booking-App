import { Link } from "react-router-dom";
import { themeContext } from "../../Context";
import { useContext } from "react";

function TheatreComponent(theatre, selectedMovie) {
  const theme =useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{
      background : darkMode? 'black':'',
      color:darkMode? "white":"",
    }}>
      <Link
        to={`/buyTickets/${selectedMovie}/${theatre._id}`}
        className="text-decoration-none fw-bold"
      >
        <div
          style={{ border: "2px solid ", cursor: "pointer" }}
          className="row py-4"
        >
          <div className="col">
            <h5>{theatre.name}</h5>
          </div>

          <div className="col">
            <div className="py-2 text-success fw-bold">
              <i className="bi bi-phone text-success"></i>
              m-Ticket
            </div>
          </div>

          <div className="col">
            <div className="py-2 text-danger fw-bold">
              <i className="bi bi-cup-straw text-danger"></i>
              Food And Beverages
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function TheatreDetails({ theatresDetail, selectedMovie }) {
  return (
    <div>
      {theatresDetail.map((theatre) =>
        TheatreComponent(theatre, selectedMovie)
      )}
    </div>
  );
}

export default TheatreDetails;
