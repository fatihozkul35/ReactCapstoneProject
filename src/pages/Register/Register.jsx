import { Card, CardMedia } from "@mui/material";
import React from "react";
import FormikRegister from "../../components/FormikRegister/FormikRegister";
import { cardContainerStyle } from "../Login/loginStyles";
import registerImage from "../../assets/img/register4.jpg";
const Register = () => {
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
        <h1>Register</h1>
        <Card
          sx={{
            maxWidth: 400,
            borderRadius: "50%",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={registerImage}
            alt="green iguana"
            sx={{
              objectFit: "contain",
              borderRadius: "50%",
              overFlow: "hidden",
            }}
          />
        </Card>
        <FormikRegister />
      </div>
    </div>
  );
};

export default Register;
