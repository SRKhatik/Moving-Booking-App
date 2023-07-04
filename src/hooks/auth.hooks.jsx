import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../api/auth.api";
import { TOKEN, USER_TYPES, userTypes } from "../utils/constants";

const useAuth = () => {
  const intialStates = { userId: "", password: "" };

  const navigate = useNavigate();

  const redirect = () => {
    const userType = localStorage.getItem(USER_TYPES);
    const token = localStorage.getItem(TOKEN);

    if (!userType || !token) {
      return;
    }

    if (userType === userTypes.ADMIN) {
      navigate("/admin");
    } else if (userType === userTypes.CLIENT) {
      navigate("/client");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    redirect();
  }, []);

  const onLogin = async (values, props) => {
    console.log(props);
    const userDetails = {
      userId: values.userId,
      password: values.password,
    };
    const loginResponse = await signIn(userDetails);
    console.log(loginResponse);
    localStorage.setItem("name", loginResponse.name);
    localStorage.setItem("userId", loginResponse.userId);
    localStorage.setItem("email", loginResponse.email);
    localStorage.setItem("userTypes", loginResponse.userTypes);
    localStorage.setItem("token", loginResponse.accessToken);
    props.setSubmitting(false);
    props.setErrors({ result: "Invalid password" });
    redirect();
  };
  return { intialStates, onLogin };
};
export default useAuth;
