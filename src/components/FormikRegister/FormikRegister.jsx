import React from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import { FormikValidationSchema } from "./FormikValidationSchema";
import { Formik } from "formik";
const FormikRegister = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          //   passwordConfirm: "",
        }}
        validationSchema={FormikValidationSchema}
        onSubmit={(values, actions) => {
          alert(`email: ${values.email}
             password: ${values.password}
            `);
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <RegisterForm {...props} />}
      ></Formik>
    </div>
  );
};

export default FormikRegister;
