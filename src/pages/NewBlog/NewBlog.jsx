import React from "react";
import Blog from "../../components/Blog/Blog";
import { createBlogToFirebase } from "../../utils/databaseFunctions";
const initialValuesOfNewBlog = {
  // id: Date.now(),
  title: "",
  date: "",
  img: "",
  description: "",
  whoCreated: "",
  whoLiked: ["a", "b", "c"],
  likedCounter: 0,
  whoCommented: ["a", "b", "c"],
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
