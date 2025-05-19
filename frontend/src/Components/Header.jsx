import React from "react";
import NavBar from "./NavBar";
import { Box } from "@mui/material";

const header = () => {
  return (
    <Box sx={{ marginY: 3 }}>
      <NavBar />
    </Box>
  );
};

export default header;
