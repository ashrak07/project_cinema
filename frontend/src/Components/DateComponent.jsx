import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import React, { useState } from "react";

const ComponentDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const daysPerPage = 7;
  const totalDays = 60; // Modifier selon ton besoin

  const [time, setTime] = useState("");
  const [type, setType] = useState("");

  const handleChangeTime = (event) => {
    setTime(event.target.value);
  };
  const handleChangeType = (event) => {
    setType(event.target.value);
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
          justifyContent: "space-between",
          bgcolor: "#37474f",
          color: "white",
          borderRadius: 5,
          mY: 2,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ margin: 5 }}>
            <Typography variant="h5" fontFamily={"Montserrat"} fontWeight={600}>
              Date
            </Typography>
          </Box>

          <ArrowBackIosNew
            onClick={handlePrev}
            disabled={startIndex === 0}
            sx={{
              ":hover": {
                color: "#ff8f00",
                cursor: "pointer",
                transform: "scale(1.3)",
                transition: "all 0.3s ease",
              },
            }}
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
                    border: isSelected ? "2px solid #ff8f00" : "0px solid ",
                    backgroundColor: isSelected ? "#455a64" : "#455a64",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "normal",
                      color: "white",
                      fontFamily: "Quicksand",
                    }}
                  >
                    {day.toLocaleDateString("en-EN", { weekday: "short" })}
                  </div>
                  <div
                    style={{
                      fontWeight: "normal",
                      color: "white",
                      fontFamily: "Quicksand",
                    }}
                  >
                    <div style={{ fontWeight: 600, marginBlock: 3 }}>
                      {day.getDate()}
                    </div>
                    <div style={{}}>
                      {day.toLocaleDateString("en-EN", { month: "short" })}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <ArrowForwardIos
            onClick={handleNext}
            disabled={startIndex + daysPerPage >= totalDays}
            sx={{
              ":hover": {
                color: "#ff8f00",
                cursor: "pointer",
                transform: "scale(1.3)",
                transition: "all 0.3s ease",
              },
            }}
          />
        </div>

        <div className="" style={{}}>
          <Typography variant="h5" fontFamily={"Montserrat"} fontWeight={600}>
            Time
          </Typography>
          <Box className="" sx={{ minWidth: 120 }}>
            <FormControl
              sx={{ minWidth: 120, borderColor: "white" }}
              variant="standard"
            >
              <Select
                value={time}
                onChange={handleChangeTime}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                disableUnderline // enlève la ligne du bas
                IconComponent={undefined} //  cacher l’icône par défaut
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  "& .MuiSelect-icon": {
                    color: "white", // couleur de la flèche
                  },
                }}
              >
                <MenuItem default value={20}>
                  20:00 PM
                </MenuItem>
                <MenuItem value={10}>10:00 AM</MenuItem>
                <MenuItem value={8}>08:00 PM</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="" style={{}}>
          <Typography variant="h5" fontFamily={"Montserrat"} fontWeight={600}>
            Type
          </Typography>
          <Box className="" sx={{ minWidth: 120 }}>
            <FormControl
              sx={{ minWidth: 80, borderColor: "white" }}
              variant="standard"
            >
              <Select
                value={type}
                onChange={handleChangeType}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                disableUnderline //  enlève la ligne du bas
                IconComponent={undefined} // cacher l’icône par défaut
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  "& .MuiSelect-icon": {
                    color: "white", // couleur de la flèche
                  },
                }}
              >
                <MenuItem value={2}>2D</MenuItem>
                <MenuItem value={3}>3D</MenuItem>
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
