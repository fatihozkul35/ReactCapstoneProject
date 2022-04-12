import React from "react";
import { useLocation } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import { updateBlogToFirebase } from "../../utils/databaseFunctions";

const UpdateBlog = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>UPDATE BLOG</h1>
      <Blog state={state} stateFunction={updateBlogToFirebase} />
    </div>
  );
};

export default UpdateBlog;
