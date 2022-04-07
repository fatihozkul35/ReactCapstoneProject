import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { loginContainer } from "./loginStyles";
const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Box
        component="form"
        sx={loginContainer}
        // noValidate
        // autoComplete="off"
      >
        <Grid container style={{ width: "50%" }} spacing={4}>
          <Grid item xs={12}>
            <TextField
              id="filled-search"
              label="E-mail"
              type="email"
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="filled-search"
              label="password"
              type="password"
              variant="filled"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" endIcon={<SendIcon />} fullWidth>
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;
