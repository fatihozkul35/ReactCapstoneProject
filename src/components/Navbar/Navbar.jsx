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
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { FaRegHandPeace } from "react-icons/fa";
import React, { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { signOut } from "../../utils/functions";

const Navbar = () => {
  // const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState();
  // (React.useState < null) | (HTMLElement > null);

  // const handleChange = (e) => {
  //   setAuth(e.target.checked);
  // };

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    // useNavigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
            <FaRegHandPeace />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CapstoneProject
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              {currentUser.displayName}
              {"  "}
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {!currentUser && (
                <div>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/login");
                    }}
                  >
                    Login
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/register");
                    }}
                  >
                    Register
                  </MenuItem>
                </div>
              )}
              {currentUser && (
                <div>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/profile");
                    }}
                  >
                    Profile
                  </MenuItem>

                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/newBlog");
                    }}
                  >
                    New Blog
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      signOut();
                      handleClose();
                      navigate("/");
                    }}
                  >
                    Logout
                  </MenuItem>
                </div>
              )}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
