import React from "react";
import Blog from "../../components/Blog/Blog";
import { createBlogToFirebase } from "../../utils/databaseFunctions";
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
    <div>
      <h1>New Blog</h1>
      <Blog
        state={initialValuesOfNewBlog}
        stateFunction={createBlogToFirebase}
      />
    </div>
  );
};

export default NewBlog;
