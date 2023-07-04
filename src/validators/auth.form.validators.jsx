import React from "react";

//validations
function formValidators(values) {
  const errors = {};
  if (!values.userId) {
    errors.userId = "UserId is Required";
  }
  // if (!values.name) {
  //   errors.name = "Name is Required";
  // } else if (values.name.lenght < 5) {
  //   errors.name = "Name should be min 5 characters";
  // }
  // if (!values.email) {
  //   errors.email = "Email is Required";
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //   errors.email = "Invalid email address";
  // }
  if (!values.password) {
    errors.password = "Password is Required";
  } else if (values.password.lenght < 5) {
    errors.password = "Password should be min 5 characters";
  }
  return errors;
}

export default formValidators;
