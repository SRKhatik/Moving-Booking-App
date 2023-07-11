import React from "react";

//validations
export function loginformValidators(values) {
  const errors = {};
  if (!values.userId) {
    errors.userId = "UserId is Required";
  }
  if (!values.password) {
    errors.password = "Password is Required";
  } else if (values.password.lenght < 5) {
    errors.password = "Password should be min 5 characters";
  }
  return errors;
}

export function registerFormValidator(values){
  const errors = {};
if (!values.userId) {
errors.userId = "UserId is Required";
}
if (!values.password) {
errors.password = "Password is Required";
}else if(values.password.length < 5){
errors.password = "Password should be of min 5 characters";
}

if (!values.email) {
errors.email = 'Email is Required';
} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
errors.email = 'Invalid email address';
}

if (!values.name ) {
errors.name = "name is Required";
}


return errors;
};
