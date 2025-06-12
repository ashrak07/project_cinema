import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSeat } from "../Redux/SeatSlice";
import io from "socket.io-client";
import { addTakenSeats } from "../Redux/SeatSlice";

const socket = io("http://localhost:3001");

const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
const cols = 12;

const SeatPicker = () => {
  const dispatch = useDispatch();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const takenSeats = useSelector((state) => state.seats.takenSeats);

  useEffect(() => {
    // 🎧 Écoute les places mises à jour depuis le serveur
    socket.on("updateTakenSeats", ({ projectionId, seats }) => {
      console.log("🎯 Places mises à jour reçues :", seats);
      dispatch(addTakenSeats(seats));
    });

    return () => {
      socket.off("updateTakenSeats");
    };
  }, [dispatch]);

  const handleClick = (row, col) => {
    const seatId = `${row}-${col}`;
    dispatch(toggleSeat(seatId));
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 50px)",
        gap: "0.5px",
        justifyContent: "center",
      }}
      className=""
    >
      {rows.map((row) =>
        Array.from({ length: cols }).map((_, col) => {
          const seatId = `${row}-${col}`;
          const isSelected = selectedSeats.includes(seatId);
          const isTaken = takenSeats.includes(seatId);

          return (
            <button
              key={seatId}
              disabled={isTaken}
              onClick={() => handleClick(row, col)}
              style={{
                width: 30,
                height: 20,
                margin: 4,
                backgroundColor: isTaken
                  ? "gray"
                  : isSelected
                  ? "#ffecb3"
                  : "#ccc",
                // borderRadius: 4,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
                cursor: isTaken ? "not-allowed" : "pointer",
                border: "none",
              }}
            />
          );
        })
      )}
    </div>
  );
};

export default SeatPicker;
