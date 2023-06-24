import React from "react";
import "../../buttonstyle/login.css";
import formValidators from "../../validators/auth.form.validators";
import { Formik, Form , Field, ErrorMessage } from "formik";
import useAuth from "../../hooks/auth.hooks";
import logo from "../../assets/MBA5.png"
function Auth() {
  const {intialStates,onLogin} = useAuth();
  return (
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
        <div className='d-flex align-items-center justify-content-center'>
        <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto',marginBottom:"2rem" }} />
      </div>
     
      <div
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(5px)",
          border: "1px solid",
          borderColor: "gold",
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width:"22rem"
        }}
      >
        <Formik
        initialValues={intialStates}
        validate={formValidators}
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
              <ErrorMessage className="pb-2" name="password" component="div" 
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
      </div>
    </div>
  );
}

export default Auth;