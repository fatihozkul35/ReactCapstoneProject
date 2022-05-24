import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
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
          maxWidth: 400,
          borderRadius: "2rem",
          boxShadow:
            "5px 5px 8px #1BA0F2, 10px 10px 8px #38BDF2, 15px 15px 8px #38D0F2",
          margin: "4rem",
        }}
      >
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "4rem 1rem",
          }}
        >
          <Box>
            <Avatar
              sx={{
                bgcolor: deepOrange[500],
                width: 100,
                height: 100,
                fontSize: "2rem",
              }}
            >
              {(currentUser.displayName || currentUser.email)
                .charAt(0)
                .toUpperCase()}
            </Avatar>
          </Box>
          <CardContent>
            {currentUser.displayName && (
              <>
                <Typography gutterBottom variant="p" component="p">
                  Display Name
                </Typography>
                <Typography gutterBottom variant="p" component="h1">
                  {currentUser.displayName}
                </Typography>
              </>
            )}
            <Typography gutterBottom variant="p" component="p">
              Email
            </Typography>
            <Typography gutterBottom variant="p" component="h1">
              {currentUser.email}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Profile;
