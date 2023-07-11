import { Link, useLocation } from "react-router-dom";
import "../../buttonstyle/loginAuth.css";

export function UnAuthenticated() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-dark text-white">
    <div className="container text-center p-5 border">
      <h3 className="fw-bold mb-5">
        You need to be login to access this Movie Nights page !!
      </h3>
  
      <Link to={`/login?redirectKey=${currentPath}`}>
        <button >LOGIN</button>
      </Link>
    </div>
  </div>
  
  );
}
