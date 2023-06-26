import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { isUserLoggedIn } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/MBA5.png";
import Toggle from "../Toogle/Toogle";

const Navbar = () => {
  const isLoggedIn = isUserLoggedIn();
  const navigate = useNavigate();

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
          <Form.Control size="sm" type="text" placeholder="Search Movie"/>
        </div>

        <Toggle />

        <div>
          <Button onClick={onAuthButtonClick} variant="danger">
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
