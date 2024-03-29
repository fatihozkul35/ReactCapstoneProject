import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import { FaRegHandPeace } from "react-icons/fa";
import React, { useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../utils/loginAndLogoutfunctions";
import { MenuItemHover, navbar } from "./navbarStyles";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState();

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box style={navbar} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
            <FaRegHandPeace />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "inherit",
              fontSize: "2rem",
              color: "#19402E",
            }}
          >
            Welcome to our website{" "}
            {currentUser.displayName || currentUser.email}
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
              <AccountCircle />
            </IconButton>
            <Menu
              sx={{ fontFamily: "inherit" }}
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
                  <MenuItemHover>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        navigate("/login");
                      }}
                    >
                      Login
                    </MenuItem>
                  </MenuItemHover>
                  <MenuItemHover>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        navigate("/register");
                      }}
                    >
                      Register
                    </MenuItem>
                  </MenuItemHover>
                </div>
              )}
              {currentUser && (
                <div>
                  <MenuItemHover>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        navigate("/profile");
                      }}
                    >
                      Profile
                    </MenuItem>
                  </MenuItemHover>
                  <MenuItemHover>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        navigate("/newBlog");
                      }}
                    >
                      New Blog
                    </MenuItem>
                  </MenuItemHover>
                  <MenuItemHover>
                    <MenuItem
                      onClick={() => {
                        logOut(dispatch, navigate);
                        handleClose();
                      }}
                    >
                      Logout
                    </MenuItem>
                  </MenuItemHover>
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
