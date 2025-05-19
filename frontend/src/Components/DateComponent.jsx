import { Box, Container } from "@mui/material";
import React, { useState } from "react";

const ComponentDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const daysPerPage = 7;
  const totalDays = 60; // Modifier selon ton besoin

  // Génère un tableau des 7 prochains jours
  const getNextDays = (numDays) => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < numDays; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const allDays = getNextDays(totalDays);
  const visibleDays = allDays.slice(startIndex, startIndex + daysPerPage);

  const formatDate = (date) =>
    date.toLocaleDateString("fr-FR", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });

  const handleNext = () => {
    if (startIndex + daysPerPage < allDays.length) {
      setStartIndex(startIndex + daysPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - daysPerPage >= 0) {
      setStartIndex(startIndex - daysPerPage);
    }
  };

  // const days = getNextDays(30);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          bgcolor: "#37474f",
          color: "white",
          borderRadius: 5,
        }}
      >
        <h3>Date</h3>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {visibleDays.map((day, index) => {
            const isSelected =
              selectedDate &&
              selectedDate.toDateString() === day.toDateString();
            return (
              <button
                key={index}
                onClick={() => setSelectedDate(day)}
                style={{
                  padding: "10px 15px",
                  borderRadius: "8px",
                  border: isSelected ? "2px solid #1976d2" : "1px solid #ccc",
                  backgroundColor: isSelected ? "#e3f2fd" : "#fff",
                  cursor: "pointer",
                }}
              >
                {formatDate(day)}
              </button>
            );
          })}
        </div>

        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button onClick={handlePrev} disabled={startIndex === 0}>
            ⬅ Précédent
          </button>
          <button
            onClick={handleNext}
            disabled={startIndex + daysPerPage >= totalDays}
          >
            Suivant ➡
          </button>
        </div>

        {selectedDate && (
          <p style={{ marginTop: "20px" }}>
            Date sélectionnée :{" "}
            <strong>{selectedDate.toLocaleDateString("fr-FR")}</strong>
          </p>
        )}
      </Box>
    </Container>
  );
};

export default ComponentDate;
