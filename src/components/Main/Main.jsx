import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getblogsFromFirebase } from "../../utils/databaseFunctions";
import CardItem from "../CardItem/CardItem";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getblogsFromFirebase(setBlogs);
  }, []);

  return (
    <Box>
      <Typography variant="h3" component="h1" sx={{ my: 5 }}>
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
