import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { registerFormContainer } from "../../components/RegisterForm/registerFormStyles";
import { createBlogToFirebase } from "../../utils/databaseFunctions";
import { useSelector } from "react-redux";

const initialValuesOfNewBlog = {
  id: "",
  title: "",
  date: "",
  img: "",
  description: "",
  whoCreated: "",
  whoLiked: ["a", "b", "c"],
  likedCounter: 0,
  // whoCommented: {},
};

const NewBlog = () => {
  const [blogForm, setBlogForm] = useState(initialValuesOfNewBlog);
  const { currentUser } = useSelector((state) => state.auth);

  const changeBlog = (e) => {
    setBlogForm({ ...blogForm, [e.target.name]: e.target.value });
  };

  const newBlogsubmitToFirebase = (e) => {
    e.preventDefault();
    const id = Date.now();
    // const date = `${new Date().getDate()}+ ${new Date().getMonth()} +${new Date().getYear()}`; //!ayar cekilecek...
    const date = new Date().getTime();
    const whoCreated = currentUser.email;
    const newBlog = {
      ...blogForm,
      id: id,
      whoCreated: whoCreated,
      date: date,
    };
    console.log(newBlog);
    createBlogToFirebase(newBlog);
    setBlogForm(initialValuesOfNewBlog);
  };

  return (
    <div>
      <h1>New Blog</h1>
      <Box
        component="form"
        style={registerFormContainer}
        onSubmit={newBlogsubmitToFirebase}
        // noValidate
        // autoComplete="off"
      >
        <Grid container style={{ width: "50%" }} spacing={4}>
          <Grid item xs={12}>
            <TextField
              id="title"
              name="title"
              label="Title"
              type="text"
              variant="filled"
              value={blogForm.title}
              // onChange={handleChange}
              // onBlur={handleBlur}
              // helperText={touched.email && errors.email}
              // error={touched.email && Boolean(errors.email)}
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
              variant="filled"
              value={blogForm.img}
              // onChange={handleChange}
              // onBlur={handleBlur}
              // helperText={touched.password && errors.password}
              // error={touched.password && Boolean(errors.password)}
              onChange={changeBlog}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              // id="filled-search"
              id="description"
              name="description"
              label="Content"
              type="text"
              variant="filled"
              value={blogForm.description}
              // onChange={handleChange}
              // onBlur={handleBlur}
              // helperText={touched.password && errors.password}
              // error={touched.password && Boolean(errors.password)}
              onChange={changeBlog}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              fullWidth
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default NewBlog;
