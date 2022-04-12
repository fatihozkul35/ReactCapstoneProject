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

// const blogs = [
//   {
//     title: "Shrimp and Chorizo Paella",
//     date: "September 14, 2016",
//     img: "https://cdn.pixabay.com/photo/2022/01/22/16/26/lake-6957802_960_720.jpg",
//     description:
//       "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
//   },
//   {
//     title: "Shrimp and Chorizo Paella",
//     date: "September 14, 2016",
//     img: "https://cdn.pixabay.com/photo/2022/01/22/16/26/lake-6957802_960_720.jpg",
//     description:
//       "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
//   },
// ];

const CardItem = (prop) => {
  const { title, date, img, description } = prop.blog;
  const navigate = useNavigate();

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              S
            </Avatar>
          }
          title={title}
          subheader={date}
        />
        <CardActionArea onClick={() => navigate(`/${title}`)}>
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
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ChatBubbleOutlineIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardItem;
