import React from "react";
import { useState } from "react";

const rows = 5;
const cols = 10;

const SeatPicker = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleClick = (row, col) => {
    const seatId = `${row}-${col}`;
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  return (
    <div>
      {Array.from({ length: rows }).map((_, row) => (
        <div style={{ display: "flex" }} key={row}>
          {Array.from({ length: cols }).map((_, col) => {
            const seatId = `${row}-${col}`;
            const isSelected = selectedSeats.includes(seatId);
            return (
              <div
                key={col}
                onClick={() => handleClick(row, col)}
                style={{
                  width: 30,
                  height: 30,
                  margin: 4,
                  backgroundColor: isSelected ? "green" : "#ccc",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default SeatPicker;
