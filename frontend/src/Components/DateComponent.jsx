import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import React, { useState } from "react";

const ComponentDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const daysPerPage = 7;
  const totalDays = 60; // Modifier selon ton besoin

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
          alignItems: "center",
          bgcolor: "#37474f",
          color: "white",
          borderRadius: 5,
        }}
      >
        <Box sx={{ margin: 5 }}>
          <div>Date</div>
        </Box>
        <ArrowBackIosNew
          onClick={handlePrev}
          disabled={startIndex === 0}
          sx={{ cursor: "pointer" }}
        />

        <div
          className=""
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            margin: 10,
          }}
        >
          {visibleDays.map((day, index) => {
            const isSelected =
              selectedDate &&
              selectedDate.toDateString() === day.toDateString();
            return (
              <button
                // className="b1"
                key={index}
                onClick={() => setSelectedDate(day)}
                style={{
                  padding: isSelected ? "10px 15px" : "10px 15px",
                  borderRadius: "10px",
                  border: isSelected ? "2px solid #ffc107" : "0px solid ",
                  backgroundColor: isSelected ? "#455a64" : "#455a64",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontWeight: "bold", color: "white" }}>
                  {day.toLocaleDateString("en-EN", { weekday: "short" })}
                </div>
                <div style={{ color: "white" }}>
                  <span>{day.getDate()}</span>
                  <span style={{ margin: 5 }}>
                    {day.toLocaleDateString("en-EN", { month: "short" })}{" "}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
        <ArrowForwardIos
          onClick={handleNext}
          disabled={startIndex + daysPerPage >= totalDays}
          sx={{ cursor: "pointer" }}
        />

        <div>
          <div>Time</div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        {selectedDate &&
          console.log(
            "selected date ==>",
            selectedDate.toLocaleDateString("fr-FR")
          )}
      </Box>
    </Container>
  );
};

export default ComponentDate;
