import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CardItem from "../CardItem/CardItem";

const Main = () => {
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
        <Grid item>
          <CardItem />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
