import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { blogsFromFirebase } from "../../utils/databaseFunctions";
import CardItem from "../CardItem/CardItem";

// const blogs = [
//   {
//     title: "Shrimp and Chorizo Paella",
//     date: "September 14, 2016",
//     img: "https://cdn.pixabay.com/photo/2022/01/22/16/26/lake-6957802_960_720.jpg",
//     description:
//       "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
//   },
//   {
//     title: "Shrimp and Chorizo Paella",
//     date: "September 14, 2016",
//     img: "https://cdn.pixabay.com/photo/2022/01/22/16/26/lake-6957802_960_720.jpg",
//     description:
//       "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
//   },
// ];
const Main = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    blogsFromFirebase(setBlogs);
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
