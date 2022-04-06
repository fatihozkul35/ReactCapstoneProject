import {
  AppBar,
  Box,
  FormControlLabel,
  FormGroup,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  Toolbar,
  Typography,
  // IconButtonProps,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
// import { FaRegHandPeace } from "react-icons/fa";
// import { navbar } from "./navbarStyles";
// import { ExpandMore } from "@mui/icons-material";

const Navbar = () => {
  //! functions of navbar
  // const [auth, setAuth] = useState(true);
  // const [anchorEl, setAnchorEl] = useState(null);
  // (React.useState < null) | (HTMLElement > null);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAuth(event.target.checked);
  // };

  // const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              // checked={auth}
              // onChange={handleChange}
              aria-label="login switch"
            />
          }
          // label={auth ? "Logout" : "Login"}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          {/* {auth && ( */}
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              // anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              // open={Boolean(anchorEl)}
              // onClose={handleClose}
            >
              <MenuItem
              // onClick={handleClose}
              >
                Profile
              </MenuItem>
              <MenuItem
              // onClick={handleClose}
              >
                My account
              </MenuItem>
            </Menu>
          </div>
          {/* )} */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
