import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { isUserLoggedIn } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/MBA5.png";
import Toggle from "../Toogle/Toogle";
import { useState } from "react";
import { TOKEN } from "../../utils/constants";

const Navbar = ({ filterMovies }) => {
  const isLoggedIn = isUserLoggedIn(false);
  const navigate = useNavigate();
  const [searchValue, onSearchChange] = useState("");

  const token = localStorage.getItem(TOKEN);

  const onInputChange = (e) => {
    onSearchChange(e.target.value);
    if (filterMovies) {
      filterMovies(e.target.value);
    }
  };

  const onAuthButtonClick = () => {
    if (isLoggedIn) {
      localStorage.clear();
    }
    navigate("/login");
  };

  return (
    <div className=" bg-dark fixed-top p-1 ">
      <div className="d-flex align-items-center justify-content-around">
        <div>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "5rem", height: "auto" }}
          />
        </div>

        <div className="w-50">
          <Form.Control
            size="sm"
            type="text"
            placeholder="Search Movie"
            input={searchValue}
            onChange={onInputChange}
          />
        </div>

        <Toggle />

        <div>
          {!token ? (
           <Button onClick={onAuthButtonClick} variant="primary">
           Login
           </Button>
          ) : (
           <Button onClick={onAuthButtonClick} variant="danger">
              Logout
           </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
