import React from "react";
import CartComponent from "./CartComponent";
import SeatPicker from "./SeatPicker";

const BookingSection = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        padding: "20px",
      }}
    >
      <div style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
        <CartComponent />
      </div>
      <div style={{ backgroundColor: "#e0e0e0", padding: "10px" }}>
        <SeatPicker />
      </div>
    </div>
  );
};

export default BookingSection;
