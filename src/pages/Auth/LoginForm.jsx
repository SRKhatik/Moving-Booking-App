import React, { useState } from "react";
import "../../buttonstyle/login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLogin } from "../../hooks/auth.hooks";
import logo from "../../assets/MBA5.png";
import { Link } from "react-router-dom";
import { loginformValidators } from "../../validators/auth.form.validators";

const LoginForm = () => {
  const [myerror, setMyError] = useState({ isTrue: false, errorData: "" });
  
  const { intialStates, onLogin } = useLogin(setMyError);

  return (
    <>
      
      <div
        style={{
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(5px)",
          border: "3px solid gold",
          padding: "2rem",
        }}
        className=" bg-dark text-warning text-center"
      >
        <div className="d-flex align-items-center justify-content-center">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "200px", height: "auto", marginBottom: "2rem" }}
          />
        </div>

        <div
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(5px)",
            border: "1px solid",
            flexDirection: "column",
            borderColor: "gold",
            padding: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "22rem",
          }}
        >
          <Formik
            initialValues={intialStates}
            validate={loginformValidators}
            onSubmit={onLogin}
          >
            {({ isSubmitting }) => (
              <Form>
                <h2 className="text-center text-warning">LOGIN</h2>
                <Field
                  type="text"
                  name="userId"
                  placeholder="Enter your userId"
                  className="form-control mb-3 text-white"
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur(10px)",
                    borderColor: "gold",
                  }}
                />
                <ErrorMessage className="pb-2" name="userId" component="div" />

                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="form-control mb-3  text-white"
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur(10px)",
                    borderColor: "gold",
                  }}
                />
                <ErrorMessage
                  className="pb-2"
                  name="password"
                  component="div"
                />

                <button
                  type="submit"
                  className="button form-control "
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
          <Link to="/signUp" className="text-decoration-none">
            <p className="fw-bolder mt-4  text-warning ">
              New User ? : Sign Up
            </p>
          </Link>
          <div className="error text-info">{myerror.isTrue && myerror.errorData}</div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
