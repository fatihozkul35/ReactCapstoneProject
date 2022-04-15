import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

import CardItem from "../CardItem/CardItem";

const Main = () => {
  const { blogs } = useSelector((state) => state.blogs);

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
