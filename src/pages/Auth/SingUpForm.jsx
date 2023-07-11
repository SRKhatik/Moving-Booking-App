import React, { useState } from "react";
import "../../buttonstyle/login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import logo from "../../assets/MBA5.png";
import { Link } from "react-router-dom";
import { useRegister } from "../../hooks/auth.hooks";
import { registerFormValidator } from "../../validators/auth.form.validators";

const SingUpForm =()=>{
    const { intialStates, onRegister } = useRegister();
    return <>
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
        padding: "1rem",
      }}
      className=" bg-dark text-warning text-center"
    >
      <div className="d-flex align-items-center justify-content-center">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "200px", height: "auto", marginBottom: "1rem" }}
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
          validate={registerFormValidator}
          onSubmit={onRegister}
        >
          {({ isSubmitting }) => (
            <Form>
              <h2 className="text-center text-warning">SIGN UP</h2>
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
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="form-control mb-3 text-white"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(10px)",
                  borderColor: "gold",
                }}
              />
              <ErrorMessage className="pb-2" name="name" component="div" />
              <Field
                type="text"
                name="email"
                placeholder="Enter your E-mail"
                className="form-control mb-3 text-white"
                style={{
                  background: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(10px)",
                  borderColor: "gold",
                }}
              />
              <ErrorMessage className="pb-2" name="email" component="div" />
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
              <ErrorMessage className="pb-2" name="password" component="div" />

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
      
        <Link to="/login" className="text-decoration-none">  
    
          <p className="fw-bolder mt-4  text-warning ">
            Existing User ? : Sign Up
          </p>
         
        </Link>
      
      </div>
    </div>
    </>
}
export default SingUpForm;