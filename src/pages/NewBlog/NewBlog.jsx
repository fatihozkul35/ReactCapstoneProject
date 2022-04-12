import React from "react";
import Blog from "../../components/Blog/Blog";
const initialValuesOfNewBlog = {
  id: Date.now(),
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
      <Blog state={initialValuesOfNewBlog} />
    </div>
  );
};

export default NewBlog;
