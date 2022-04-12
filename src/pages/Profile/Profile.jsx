import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";
import { useSelector } from "react-redux";
import { profileContainer } from "./profileStyles";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <div style={profileContainer}>
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: "2rem",
          boxShadow: "10px 10px black",
        }}
      >
        <CardActionArea
          sx={{ display: "flex", flexDirection: "column", padding: "1rem" }}
        >
          <Box>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>
              {currentUser.displayName?.charAt(0)}
            </Avatar>
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              {currentUser.displayName ? "Display Name" : "Email"}
            </Typography>
            <Typography gutterBottom variant="h5" component="h1">
              {currentUser.displayName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Profile;
