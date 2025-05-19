import { Box } from "@mui/material";
import React from "react";

const DateHeader = () => {
  return (
    <div style={{ display: "flex", gap: 5 }}>
      <Box
        sx={{
          borderRadius: 6,
          padding: 1.5,
          borderColor: "red",
          border: 0.1,
        }}
      >
        <div>Today</div>
        <div>2 Apr</div>
      </Box>
      <Box
        sx={{
          borderRadius: 6,
          padding: 1.5,
          borderColor: "red",
          border: 0.1,
        }}
      >
        <div>Today</div>
        <div>2 Apr</div>
      </Box>
      <Box
        sx={{
          borderRadius: 6,
          padding: 1.5,
          borderColor: "red",
          border: 0.1,
        }}
      >
        <div>Today</div>
        <div>2 Apr</div>
      </Box>
    </div>
  );
};

export default DateHeader;
