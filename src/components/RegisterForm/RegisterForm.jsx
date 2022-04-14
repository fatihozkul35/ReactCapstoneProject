import { Button, Grid, Snackbar, TextField } from "@mui/material";
import React from "react";
import { registerFormContainer } from "./registerFormStyles";
import SendIcon from "@mui/icons-material/Send";
import { Form } from "formik";
import { registerWithEmailPassword } from "../../utils/loginAndLogoutfunctions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const RegisterForm = (props) => {
  const { values, handleChange, handleBlur, touched, errors } = props;

  // const [state, setState] = React.useState({
  //   open: false,
  //   vertical: "top",
  //   horizontal: "center",
  // });
  // const { vertical, horizontal, open } = state;
  // const handleClick = (newState) => () => {
  //   setState({ open: true, ...newState });
  // };

  const dispatch = useDispatch();

  const handleSubmitRegister = (e) => {
    e.preventDefault();
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
      <Grid container style={{ maxWidth: 400 }} spacing={2}>
        <Grid item xs={12}>
          <TextField
            // id="filled-search"
            id="email"
            // name="email"
            label="E-mail"
            type="email"
            variant="standard"
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
            variant="standard"
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
            // onClick={handleClick({
            //   vertical: "bottom",
            //   horizontal: "center",
            // })}
          >
            Register
          </Button>
          {/* <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            autoHideDuration={500}
            // onClose={handleClose}
            message="I love snacks"
            key={vertical + horizontal}
          /> */}
        </Grid>
        <Grid item xs={12}>
          <Link to="/login" style={{ fontSize: "1.5rem" }}>
            You already have an account?
          </Link>
        </Grid>
      </Grid>
    </Form>
  );
};

export default RegisterForm;
