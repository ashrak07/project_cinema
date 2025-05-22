import { Typography, Box, Button, Divider } from "@mui/material";
import React from "react";

const CartComponent = () => {
  return (
    <Box>
      <Box sx={{ margin: 5 }}>
        <Box sx={{ color: "white" }}>
          <Typography variant="h4" gutterBottom>
            Select your seat
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ marginRight: 2 }} variant="subtitle">
              2 Seats
            </Typography>
            <Box
              sx={{
                background: "#607d8b",
                borderRadius: 5,
                width: 50,
                textAlign: "center",
              }}
            >
              <Typography variant="subtitle">D1 </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: 5, color: "white" }}>
          <Typography variant="h4" gutterBottom>
            Movie Ticket
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="subtitle">Date & Time</Typography>
            <Typography variant="subtitle">12/07/2022 - 20:00PM</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <Typography variant="subtitle">Ticket</Typography>
          <Typography variant="subtitle">2 x 40$</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            background: "#78909c",
            borderRadius: 3,
          }}
        >
          <Typography variant="subtitle">Total</Typography>
          <Typography variant="subtitle">80$</Typography>
        </Box>
      </Box>

      {/* --- cart --- */}
      <Box sx={{ marginY: 5, padding: 5, borderRadius: 5 }} className="b1">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle">Tickets/Double comfort</Typography>
          <Typography variant="subtitle">2</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle">Type</Typography>
          <Typography variant="subtitle">3D</Typography>
        </Box>
        <Divider sx={{ marginBlock: 2 }}></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">PRICE TOTAL</Typography>
          <Typography variant="h5">80$</Typography>
        </Box>
        <Box sx={{ marginY: 2 }}>
          <Button fullWidth variant="contained" sx={{}}>
            BUY
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CartComponent;
