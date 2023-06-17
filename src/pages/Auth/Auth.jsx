import React from "react";
import Poster from "../../img/poster.jpg";
import '../../buttonstyle/login.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
function Auth() {
  return (
    <div
      style={{
        backgroundImage: `url(${Poster})`,
        backgroundSize: "89rem 49rem",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className=" vh-100 vw-100"
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(5px)",
          border: "1px solid",
          borderColor: "gold",
          padding: "2rem",
          width: "30%",
          marginLeft: "-45rem",
          marginTop: "10rem",
        }}
      >
        <Formik>
          {({ isSubmitting }) => (
            <Form>
              <h2 className="text-center text-warning">LOGIN</h2>
              <Field
                type="text"
                name="fullname"
                placeholder="Enter your fullname"
                className="form-control mb-3 text-white"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(10px)",borderColor: "gold",
                }}
              />
              <ErrorMessage name="fullname" component="div" />

              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                className="form-control mb-3"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(10px)",borderColor: "gold"
                }}
              />
              <ErrorMessage name="password" component="div" />

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
