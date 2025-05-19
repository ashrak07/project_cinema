import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Container } from "@mui/material";

const MovieCarousel = ({ movies }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  const visibleMovies = movies.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (startIndex + itemsPerPage < movies.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  return (
    <Container>
      <div className="" style={{ width: "100%", color: "white" }}>
        <h2>Films disponibles</h2>

        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ArrowBackIosNewIcon
            onClick={handlePrev}
            disabled={startIndex === 0}
          />
          {/* <button onClick={handlePrev} disabled={startIndex === 0}>
            <ArrowBackIosNewIcon />
          </button> */}

          <div
            style={{
              display: "flex",
              overflow: "hidden",
              gap: "30px",
              // padding: "10px",
              width: "100%",
              justifyContent: "center",
            }}
            className=""
          >
            {visibleMovies.map((movie, index) => (
              <div
                key={index}
                style={{
                  width: "180px",
                  minWidth: "180px",
                  border: "1px solid #ccc",
                  borderRadius: "20px",
                  padding: "1px",
                  textAlign: "center",
                  // backgroundColor: "#f9f9f9",
                  background: "#ffc107",
                }}
                className=""
              >
                <img
                  className=""
                  src={movie.poster}
                  alt={movie.title}
                  style={{
                    width: "100%",
                    height: "250px", // 🔧 fixe la hauteur
                    objectFit: "cover", // 🔧 évite les déformations
                    borderRadius: "20px",
                    display: "block",
                  }}
                />
                <p
                  className=""
                  style={{
                    color: "white",
                    marginTop: "2px",
                    marginBottom: "2px",
                  }}
                >
                  {movie.title}
                </p>
              </div>
            ))}
          </div>

          <ArrowForwardIosIcon
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= movies.length}
          />
          {/* <button
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= movies.length}
          >
            <ArrowForwardIosIcon />
          </button> */}
        </div>
      </div>
    </Container>
  );
};

export default MovieCarousel;
