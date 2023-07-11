
import {useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import SingUpForm from "./SingUpForm";

function Auth() {

  const url = useLocation();
  const isLoginPage = (url.pathname=="/login");
  console.log(isLoginPage);

  return <>
      
      {isLoginPage  &&  <LoginForm/>}
    {!isLoginPage  &&  <SingUpForm/>}
  </>
  
    
}

export default Auth;
