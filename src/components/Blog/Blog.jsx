import { Box, Button, Grid, TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { registerFormContainer } from "../RegisterForm/registerFormStyles";
import { useSelector } from "react-redux";
import { initialValuesOfNewBlog } from "../../pages/NewBlog/NewBlog";
import { toastifySuccess } from "../../utils/toastifyFunction";

const Blog = ({ state, stateFunction }) => {
  const [blogForm, setBlogForm] = useState(state);
  const { currentUser } = useSelector((state) => state.auth);

  const changeBlog = (e) => {
    setBlogForm({ ...blogForm, [e.target.name]: e.target.value });
  };

  const newBlogsubmitToFirebase = (e) => {
    e.preventDefault();

    const dat = new Date();
    const date = [
      dat.getDate(),
      dat.toLocaleString("default", { month: "long" }),
      dat.getFullYear(),
    ];
    const whoCreated = currentUser.email;
    const newBlog = {
      ...blogForm,
      whoCreated: whoCreated,
      date: date,
    };
    stateFunction(newBlog);
    setBlogForm(initialValuesOfNewBlog);
    toastifySuccess("Your blog has been successfully added...");
  };

  return (
    <div>
      <Box
        component="form"
        style={registerFormContainer}
        onSubmit={newBlogsubmitToFirebase}
      >
        <Grid container style={{ width: 400 }} spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="title"
              name="title"
              label="Title"
              type="text"
              variant="standard"
              value={blogForm.title}
              fullWidth
              onChange={changeBlog}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              // id="filled-search"
              id="img"
              name="img"
              label="Image URL"
              type="url"
              variant="standard"
              value={blogForm.img}
              onChange={changeBlog}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              id="description"
              name="description"
              aria-label="empty textarea"
              placeholder="Content"
              maxRows={5}
              style={{ width: 200, padding: "10px 0 0 10px" }}
              onChange={changeBlog}
              value={blogForm.description}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              fullWidth
            >
              ADD NEW BLOG
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Blog;
