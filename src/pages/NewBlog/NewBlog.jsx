import { Card, CardMedia } from "@mui/material";
import React from "react";
import Blog from "../../components/Blog/Blog";
import { createBlogToFirebase } from "../../utils/databaseFunctions";
import { cardContainerStyle } from "../Login/loginStyles";
import blogImage from "../../assets/img/blogs.jpg";
export const initialValuesOfNewBlog = {
  title: "",
  date: "",
  img: "",
  description: "",
  whoCreated: "",
  whoLiked: [""],
  likedCounter: 0,
  whoCommented: [""],
  commentedCounter: 0,
};
const NewBlog = () => {
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
        <h1>New Blog</h1>
        <Card
          sx={{
            maxWidth: 400,
            borderRadius: "50%",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={blogImage}
            alt="green iguana"
            sx={{
              objectFit: "contain",
              borderRadius: "50%",
              overFlow: "hidden",
            }}
          />
        </Card>
        <Blog
          state={initialValuesOfNewBlog}
          stateFunction={createBlogToFirebase}
        />
      </div>
    </div>
  );
};

export default NewBlog;
