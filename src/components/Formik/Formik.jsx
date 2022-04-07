import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { FormikValidationSchema } from "./FormikValidationSchema";
const Formik = () => {
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
        // component={(props) => <LoginForm {...props} />}
      ></Formik>
    </div>
  );
};

export default Formik;
