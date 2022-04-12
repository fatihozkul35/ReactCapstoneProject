import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { registerFormContainer } from "./registerFormStyles";
import SendIcon from "@mui/icons-material/Send";
import { Form } from "formik";
import { registerWithEmailPassword } from "../../utils/loginAndLogoutfunctions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const RegisterForm = (props) => {
  const dispatch = useDispatch();
  const { values, handleChange, handleBlur, touched, errors } = props;
  const handleSubmitRegister = () => {
    registerWithEmailPassword(values.email, values.password, dispatch);
  };
  return (
    <Form
      component="form"
      style={registerFormContainer}
      // noValidate
      // autoComplete="off"
      onSubmit={handleSubmitRegister}
    >
      <Grid container style={{ width: "50%" }} spacing={4}>
        <Grid item xs={12}>
          <TextField
            // id="filled-search"
            id="email"
            // name="email"
            label="E-mail"
            type="email"
            variant="filled"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            // id="filled-search"
            id="password"
            label="password"
            type="password"
            variant="filled"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            fullWidth
          >
            Register
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Link to="/login">Sie haben bereits ein Konto?</Link>
        </Grid>
      </Grid>
    </Form>
  );
};

export default RegisterForm;
