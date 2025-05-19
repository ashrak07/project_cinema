import { Typography, Box } from "@mui/material";
import React from "react";

const CartComponent = () => {
  return (
    <div>
      <Box>
        <Typography>Select your seat</Typography>
        <Box sx={{ display: "flex" }}>
          <Typography>2 Seats</Typography>
          <Typography>D1 D2</Typography>
        </Box>
      </Box>
      <Box>
        <Typography>Movie Ticket</Typography>
        <Box sx={{ display: "flex" }}>
          <Typography>Date & Time</Typography>
          <Typography>12/07/2022 - 20:00PM</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography>Total</Typography>
        <Typography>40$</Typography>
      </Box>
    </div>
  );
};

export default CartComponent;
