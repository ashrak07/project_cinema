import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Container } from "@mui/material";

const NavBar = () => {
  return (
    <Container>
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
            <IconButton sx={{ color: "white" }}>CINEMAX</IconButton>
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
            <Box>
              <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                LOGIN
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default NavBar;
