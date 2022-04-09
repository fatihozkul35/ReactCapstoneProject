import { Box, Button, Grid, TextField } from "@mui/material";
// import { Form } from "formik";
import React, { useState } from "react";
import { registerFormContainer } from "../../components/RegisterForm/registerFormStyles";
import SendIcon from "@mui/icons-material/Send";
import { logInWithGoogle } from "../../utils/loginAndLogoutfunctions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logInWithEmailAndPassword } from "../../utils/loginAndLogoutfunctions";

const initialValuesOfForm = { email: "", password: "" };
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState(initialValuesOfForm);

  const changeForm = (e) => {
    setLoginForm({ ...loginForm, [e.target.id]: e.target.value });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(
      loginForm.email,
      loginForm.password,
      dispatch,
      navigate
    );
  };
  return (
    <div>
      <h1>Login</h1>
      <Box
        component="form"
        style={registerFormContainer}
        onSubmit={handleLogIn}
        // noValidate
        // autoComplete="off"
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
              // value={values.email}
              // onChange={handleChange}
              // onBlur={handleBlur}
              // helperText={touched.email && errors.email}
              // error={touched.email && Boolean(errors.email)}
              fullWidth
              onChange={changeForm}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              // id="filled-search"
              id="password"
              label="password"
              type="password"
              variant="filled"
              // value={values.password}
              // onChange={handleChange}
              // onBlur={handleBlur}
              // helperText={touched.password && errors.password}
              // error={touched.password && Boolean(errors.password)}
              fullWidth
              onChange={changeForm}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              fullWidth
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              fullWidth
              onClick={() => {
                logInWithGoogle(dispatch, navigate);
              }}
            >
              Sign in with Google
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;
