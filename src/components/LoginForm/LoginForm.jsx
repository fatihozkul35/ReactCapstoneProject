import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { loginFormContainer } from "./loginFormStyles";
import SendIcon from "@mui/icons-material/Send";
const LoginForm = () => {
  return (
    <Box
      component="form"
      sx={loginFormContainer}
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
  );
};

export default LoginForm;
