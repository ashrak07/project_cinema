import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Container, Typography } from "@mui/material";
import {
  getAllProjections,
  getProjection,
  getTakenSeatsByProjection,
} from "../Services/Api";
import { useDispatch, useSelector } from "react-redux";
import { addProjection, addSelectedProjection } from "../Redux/ProjectionSlice";
import { addTakenSeats, clearSeats } from "../Redux/SeatSlice";

const MovieCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const itemsPerPage = 5;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const projectionData = await getAllProjections();
      if (projectionData) {
        dispatch(addProjection(projectionData));
      }
    };
    fetchMovies();
  }, [dispatch]);

  const projection = useSelector((state) => state.projections.projectionData);
  console.log("projection ======>", projection);

  const visibleProjection = projection.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNext = () => {
    if (startIndex + itemsPerPage < projection.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const handleClickMovie = async (id) => {
    console.log("clicked index", id);

    dispatch(clearSeats());

    const selectedProjection = await getProjection(id);
    console.log("selected prj ===>", selectedProjection);
    dispatch(addSelectedProjection(selectedProjection));

    setSelectedId(id);

    const takenSeat = await getTakenSeatsByProjection(id);
    console.log("taken seat ==>", takenSeat);
    dispatch(addTakenSeats(takenSeat));
  };

  return (
    <Container>
      <div className="" style={{ width: "100%", color: "white" }}>
        <Typography
          variant="h4"
          fontWeight={600}
          fontFamily={"Montserrat"}
          gutterBottom
        >
          Movies available
        </Typography>

        <Box
          className=""
          sx={{
            display: "flex",
            alignItems: "center",
            transition: "all 1s ease",
          }}
        >
          <Box className="" sx={{}}>
            <ArrowBackIosNewIcon
              onClick={handlePrev}
              disabled={startIndex === 0}
              sx={{
                color: "white",
                ":hover": {
                  cursor: "pointer",
                  color: "#ff8f00",
                  transform: "scale(1.3)",
                  transition: "all 0.3s ease ",
                },
              }}
            />
          </Box>

          {/* -- CAROUSSEL -- */}
          <Box
            className=""
            style={{
              paddingBlock: 12,
              display: "flex",
              overflow: "hidden",
              gap: "30px",
              marginBlock: "5px",
              paddingLeft: "30px",
              width: "100%",
              justifyContent: "start",
            }}
          >
            {visibleProjection.map((prj, index) => (
              <Box
                key={index}
                tabIndex={0}
                style={{
                  width: "180px",
                  minWidth: "180px",
                  borderRadius: "20px",
                  padding: "1px",
                  textAlign: "center",
                  background: selectedId === prj._id ? "#ff8f00" : "#455a64", //
                  transition: "all 0.3s ease",
                }}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    transform: "scale(1.05)",
                    boxShadow: "0 3px 3px  #ff8f00",
                  },
                }}
                onClick={() => handleClickMovie(prj._id)}
                className=""
              >
                <img
                  className=""
                  src={`http://localhost:3001/${prj.movie.cover}`}
                  alt={prj.movie.title}
                  style={{
                    width: "100%",
                    height: "250px", //  fixe la hauteur
                    objectFit: "cover", //  évite les déformations
                    borderRadius: "20px",
                    display: "block",
                  }}
                />
                <Typography
                  className=""
                  style={{
                    fontFamily: "BebasNeue",
                    paddingInline: 9,
                    color: "white",
                    letterSpacing: "0.8px",
                    marginTop: "2px",
                    whiteSpace: "nowrap",
                    marginBottom: "2px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {prj.movie.title}{" "}
                </Typography>{" "}
              </Box>
            ))}
          </Box>

          <ArrowForwardIosIcon
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= projection.length}
            sx={{
              ":hover": {
                color: "#ff8f00",
                cursor: "pointer",
                transform: "scale(1.3)",
                transition: "all 0.3s ease",
              },
            }}
          />
        </Box>
      </div>
    </Container>
  );
};

export default MovieCarousel;
