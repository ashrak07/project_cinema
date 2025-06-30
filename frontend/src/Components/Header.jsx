import React from "react";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../Redux/UserSlice";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isAuthenticate = useSelector((state) => state.users.isAuth);
  const userName = useSelector((state) => state.users.userData);
  console.log("isAuth +++", isAuthenticate);
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogOut = () => {
    dispatch(logOut());
    setAnchorEl(null);
  };

  return (
    <Container
      sx={{
        marginBlock: 3,
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color=""
          elevation={0}
          sx={{
            bgcolor: "#37474f",
            color: "white",
            borderRadius: 5,
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              sx={{
                // color: "#ffc400",
                color: "white",
                fontSize: "35px ",
                fontFamily: "BebasNeue",
                letterSpacing: "0.8px",
                lineHight: "1.2",
              }}
            >
              CINEMAX
            </IconButton>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                Movies
              </Typography>
              <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                Kids
              </Typography>
              <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                Animations
              </Typography>
            </Box>

            {isAuthenticate ? (
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      background: "#ffc400",
                    }}
                  >
                    {userName ? userName.name.charAt(0).toUpperCase() : null}
                  </Avatar>
                </IconButton>
              </Tooltip>
            ) : (
              <Box
                sx={{
                  ":hover": {
                    cursor: "pointer",
                    color: "#ffc400",
                    fontWeight: 600,
                  },
                }}
                onClick={handleLogin}
              >
                <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                  LOGIN
                </Typography>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem> */}
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Header;
