import React from "react";
import CartComponent from "./CartComponent";
import SeatPicker from "./SeatPicker";
import { Container } from "@mui/material";

const BookingSection = () => {
  return (
    <Container>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "50px",
        }}
      >
        <div className="" style={{}}>
          <CartComponent />
        </div>
        <div
          style={{
            backgroundColor: "#78909c",
            padding: "10px",
            borderRadius: 10,
          }}
        >
          <SeatPicker />
        </div>
      </div>
    </Container>
  );
};

export default BookingSection;
