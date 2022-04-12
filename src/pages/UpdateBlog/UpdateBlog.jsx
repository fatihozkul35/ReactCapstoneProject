import React from "react";
import { useLocation } from "react-router-dom";
import Blog from "../../components/Blog/Blog";

const UpdateBlog = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>UPDATE BLOG</h1>
      <Blog state={state} />
    </div>
  );
};

export default UpdateBlog;
