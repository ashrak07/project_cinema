import { Box } from "@mui/material";
import React from "react";
import img1 from "../../public/40 ACRES (2024).jpg";

const ListFilm = () => {
  return (
    <div style={{ display: "flex" }}>
      <Box
        className="b2"
        sx={{
          height: 400,
          width: 300,
          borderRadius: 5,
        }}
      >
        <div className="b3">
          <img src={img1} alt="film-cover" width={"90%"} height={"90%"} />
        </div>
      </Box>
    </div>
  );
};

export default ListFilm;
