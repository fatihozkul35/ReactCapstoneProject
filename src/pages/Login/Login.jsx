import { Box, Button, Card, CardMedia, Grid, TextField } from "@mui/material";
import loginImage from "../../assets/img/login.jpg";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { logInWithGoogle } from "../../utils/loginAndLogoutfunctions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logInWithEmailAndPassword } from "../../utils/loginAndLogoutfunctions";
import { cardContainerStyle } from "./loginStyles";

import VpnKeyTwoToneIcon from "@mui/icons-material/VpnKeyTwoTone";


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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        paddingTop: "1rem",
      }}
    >
      <div style={cardContainerStyle}>
        <h1>Login</h1>
        <Card
          sx={{
            maxWidth: 400,
            borderRadius: "50%",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={loginImage}
            alt="green iguana"
            sx={{
              objectFit: "contain",
              borderRadius: "50%",
              overFlow: "hidden",
            }}
          />
        </Card>
        <Box
          component="form"
          sx={{ display: "flex", justifyContent: "center", padding: "2rem" }}
          onSubmit={handleLogIn}
        >
          <Grid container style={{ width: 400 }} spacing={2}>
            <Grid item xs={12} sx={{ position: "relative" }}>
              <TextField
                id="email"
                label="E-mail"
                type="email"
                variant="standard"
                required
                fullWidth
                onChange={changeForm}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="password"
                type="password"
                variant="standard"
                required
                fullWidth
                onChange={changeForm}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                endIcon={<VpnKeyTwoToneIcon />}
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
                // sx={{
                //   background:
                //     "url(https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png)",
                //   backgroundRepeat: "no-repeat",
                //   backgroundSize: "cover",
                // }}
              >
                Sign in With Google
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Login;
