import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import { red } from "@mui/material/colors";
import { cardItemDetailsContainer } from "./cardItemDetailsStyles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBlog } from "../../utils/databaseFunctions";


const CardItemDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { currentUser } = useSelector((state) => state.auth);
  const {
    whoCreated,
    title,
    date,
    img,
    description,
    id,
    likedCounter,
    commentedCounter,
    whoLiked,
  } = state;

  return (
    <div style={cardItemDetailsContainer}>
      <Typography
        variant="h3"
        color="text.secondary"
        sx={{ margin: "2rem auto" }}
      >
        Details
      </Typography>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {whoCreated.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={title}
          subheader={date}
        />
        <CardActionArea>
          <CardMedia
            component="img"
            height="194"
            image={img}
            alt="Paella dish"
          />
        </CardActionArea>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              sx={{ color: whoLiked.includes(`${currentUser.email}`) && "red" }}
            />
          </IconButton>
          <span> {likedCounter}</span>
          <IconButton aria-label="share">
            <ChatBubbleOutlineIcon />
          </IconButton>
          <span> {commentedCounter}</span>
        </CardActions>
        {currentUser.email === whoCreated && (
          <CardActions
            disableSpacing
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box aria-label="add to favorites">
              <Button
                type="submit"
                variant="contained"
                startIcon={<SystemUpdateAltIcon />}
                onClick={() => navigate("/update", { state: state })}
                fullWidth
              >
                UPDATE
              </Button>
            </Box>
            <Box aria-label="share">
              <Button
                type="submit"
                variant="contained"
                endIcon={<DeleteSweepIcon />}
                color="error"
                onClick={() => {
                  deleteBlog(id);
                  navigate("/");
                }}
                fullWidth
              >
                DELETE
              </Button>
            </Box>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default CardItemDetails;
