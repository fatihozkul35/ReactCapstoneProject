import { Box, Button, Grid, TextField } from "@mui/material";
// import { Form } from "formik";
import React from "react";
import { registerFormContainer } from "../../components/RegisterForm/registerFormStyles";
import SendIcon from "@mui/icons-material/Send";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Box
        // component="form"
        style={registerFormContainer}
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
        </Grid>
      </Box>
    </div>
  );
};

export default Login;
