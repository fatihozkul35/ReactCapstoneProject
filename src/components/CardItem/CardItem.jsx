import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  blogAddComment,
  blogAddToFavorite,
} from "../../utils/favChatFunctions";
import { cardStyle } from "./cardItemStyles";

const CardItem = (prop) => {
  const {
    id,
    title,
    date,
    img,
    description,
    whoCreated,
    likedCounter,
    commentedCounter,
    whoLiked,
  } = prop.blog;

  const navigate = useNavigate();
  const { blogs } = useSelector((state) => state.blogs);
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <div>
      <Card style={cardStyle} sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {whoCreated.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={title}
          subheader={date}
        />
        <CardActionArea
          onClick={() => navigate(`/${id}`, { state: prop.blog })}
        >
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
          <IconButton
            aria-label="add to favorites"
            onClick={() => blogAddToFavorite(prop.blog, currentUser)}
          >
            <FavoriteIcon
              sx={{ color: whoLiked.includes(`${currentUser.email}`) && "red" }}
            />
          </IconButton>
          <span> {likedCounter}</span>
          <IconButton
            aria-label="share"
            onClick={() => blogAddComment(id, blogs, currentUser)}
          >
            <ChatBubbleOutlineIcon />
          </IconButton>
          <span> {commentedCounter}</span>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardItem;
