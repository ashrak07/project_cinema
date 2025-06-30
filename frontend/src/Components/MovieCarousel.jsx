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

const MovieCarousel = ({ scrollToInfoRef }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();

  const itemsPerPage = 5;
  const itemWidth = 180;
  const itemGap = 40;
  const fullItemWidth = itemWidth + itemGap;

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
  const totalItems = projection.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNext = () => {
    if (startIndex + 1 < totalPages) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleClickMovie = async (id) => {
    dispatch(clearSeats());
    const selectedProjection = await getProjection(id);
    dispatch(addSelectedProjection(selectedProjection));
    setSelectedId(id);

    const takenSeat = await getTakenSeatsByProjection(id);
    dispatch(addTakenSeats(takenSeat));

    //  Scroll vers MovieInfo
    scrollToInfoRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  //  Important : calcul dynamique du décalage maximum
  const maxTranslateX = Math.max(
    0,
    totalItems * fullItemWidth - itemsPerPage * fullItemWidth
  );

  const translateX = Math.min(
    startIndex * itemsPerPage * fullItemWidth,
    maxTranslateX
  );

  return (
    <Container
      sx={{
        marginBlock: 5,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={600}
        fontFamily={"Montserrat"}
        gutterBottom
        style={{ color: "white" }}
      >
        Movies available
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* PREVIOUS ICON */}
        <ArrowBackIosNewIcon
          onClick={handlePrev}
          sx={{
            color: "white",
            ":hover": {
              cursor: "pointer",
              color: "#ff8f00",
              transform: "scale(1.3)",
              transition: "all 0.3s ease",
            },
          }}
        />

        {/* CAROUSEL VIEWPORT */}
        <Box
          className=""
          style={{
            width: "100%",
            padding: 11,
            // maxWidth: `${itemsPerPage * fullItemWidth - itemGap}px`, // = 990px
            overflow: "hidden",
          }}
        >
          {/* CAROUSEL TRACK */}
          <Box
            style={{
              display: "flex",
              gap: `${itemGap}px`,
              transition: "transform 0.5s ease",
              transform: `translateX(-${translateX}px)`,
            }}
          >
            {projection.map((prj, index) => (
              <Box
                key={index}
                tabIndex={0}
                style={{
                  width: `${itemWidth}px`,
                  minWidth: `${itemWidth}px`,
                  borderRadius: "20px",
                  padding: "1px",
                  textAlign: "center",
                  background: selectedId === prj._id ? "#ff8f00" : "#455a64",
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
              >
                <img
                  src={`http://localhost:3001/${prj.movie.cover}`}
                  alt={prj.movie.title}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "20px",
                    display: "block",
                  }}
                />
                <Typography
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
                  {prj.movie.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* NEXT ICON */}
        <ArrowForwardIosIcon
          onClick={handleNext}
          sx={{
            color: "white",
            ":hover": {
              cursor: "pointer",
              color: "#ff8f00",
              transform: "scale(1.3)",
              transition: "all 0.3s ease",
            },
          }}
        />
      </Box>
    </Container>
  );
};

export default MovieCarousel;
