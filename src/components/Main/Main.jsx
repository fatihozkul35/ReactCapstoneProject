import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getblogsFromFirebase } from "../../redux/thunk/blogsThunk";
// import { getblogsFromFirebase } from "../../utils/databaseFunctions";
import CardItem from "../CardItem/CardItem";

const Main = () => {
  const { blogs } = useSelector((state) => state.blogs);

  // const [blogsUi, setBlogsUi] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getblogsFromFirebase(dispatch);
  }, [dispatch]);

  return (
    <Box>
      <Typography
        variant="h3"
        component="h1"
        sx={{ py: 5, fontFamily: "inherit" }}
      >
        -----DASHBOARD-----
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
        columns={{ xs: 12, sm: 6, md: 4 }}
      >
        {blogs.map((blog, index) => {
          return (
            <Grid item key={index}>
              <CardItem blog={blog} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Main;
