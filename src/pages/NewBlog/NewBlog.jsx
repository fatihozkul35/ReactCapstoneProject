import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { registerFormContainer } from "../../components/RegisterForm/registerFormStyles";
import { createBlogToFirebase } from "../../utils/databaseFunctions";
import { useSelector } from "react-redux";

const initialValuesOfNewBlog = {
  id: 0,
  title: "",
  date: "",
  img: "",
  description: "",
  whoCreated: "",
};

const NewBlog = () => {
  const [newBlog, setNewBlog] = useState(initialValuesOfNewBlog);
  // const { currentUser } = useSelector((state) => state.auth);

  const changeBlog = (e) => {
    setNewBlog({ ...newBlog, [e.target.id]: e.target.value });
  };
  const newBlogsubmitToFirebase = (e) => {
    e.preventDefault();
    // setNewBlog({
    //   ...newBlog,
    //   id: newBlog.id + 1,
    //   whoCreated: currentUser.email,
    // });
    createBlogToFirebase(newBlog);
    setNewBlog(initialValuesOfNewBlog);
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
              label="Title"
              type="text"
              variant="filled"
              value={newBlog.title}
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
              label="Image URL"
              type="url"
              variant="filled"
              value={newBlog.img}
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
              label="Content"
              type="text"
              variant="filled"
              value={newBlog.description}
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
