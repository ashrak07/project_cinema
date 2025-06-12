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
          gridTemplateColumns: "30% 70%",
          gap: "50px",
          marginBottom: "30px",
        }}
        className=""
      >
        <div className="" style={{}}>
          <CartComponent />
        </div>
        <div
          style={{
            // backgroundColor: "#78909c",
            // backgroundColor: "#78909c",
            backgroundColor: "#37474f",
            padding: "10px",
            borderRadius: 10,
            alignContent: "center",
          }}
        >
          <SeatPicker />
        </div>
      </div>
    </Container>
  );
};

export default BookingSection;
