import React from "react";

     //validations
function  formValidators(values){
          const errors = {};
          if (!values.userId) {
            errors.userId = "UserId is Required";
          }
          if (!values.password) {
            errors.password = "Password is Required";
          }else if(values.password.lenght<5){
            errors.password = "Password should be of min 5 characters"
               }
          return errors;
        }

export default formValidators;