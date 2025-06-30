import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";

import DoneIcon from "@mui/icons-material/Done";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const MovieInfo = forwardRef((props, ref) => {
  const prj = useSelector((state) => state.projections.selectedProjection);
  console.log("zany ary ny avy am state ==>", prj);

  return (
    <div ref={ref}>
      <Container className="" sx={{ marginTop: 3 }}>
        <Card
          elevation={0}
          className=""
          sx={{
            paddingY: 3,
            display: "grid",
            gap: 10,
            gridTemplateColumns: "1fr 3fr",
            background: "#263238",
            border: "none",
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            src={`http://localhost:3001/${prj.movie.cover}`}
            sx={{
              borderRadius: 10,
              height: 500,
              width: 300,
            }}
          ></CardMedia>
          <CardContent className="" sx={{}}>
            <Typography variant="h3" color="white" fontFamily={"BebasNeue"}>
              {prj.movie.title}
            </Typography>
            <Box
              className=""
              sx={{
                marginY: 2,
                display: "flex",
                gap: 2,
              }}
            >
              <Chip
                label="Thriller"
                sx={{
                  color: "white",
                  fontFamily: "Nunito",
                  background: "#546e7a",
                }}
              ></Chip>
              <Chip
                label="Action"
                sx={{
                  color: "white",
                  background: "#546e7a",
                  fontFamily: "Nunito",
                }}
              ></Chip>
              <Chip
                label="Fiction"
                sx={{
                  color: "white",
                  background: "#546e7a",
                  fontFamily: "Nunito",
                }}
              ></Chip>
            </Box>
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#ba68c8 ",
                  color: "white",
                  width: 50,
                  borderRadius: 5,
                  paddingTop: ".1rem",
                  textAlign: "center",
                }}
              >
                <SlideshowIcon sx={{ fontSize: 17 }} />
              </Box>
              <Typography
                variant="body"
                style={{
                  color: "white",
                  marginInline: 5,
                  marginRight: 30,
                  fontSize: "small",
                  fontWeight: "bold",
                }}
              >
                3h45mn
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#81c784 ",
                  color: "white",
                  width: 50,
                  borderRadius: 5,
                  paddingTop: ".1rem",
                  textAlign: "center",
                }}
              >
                <HourglassBottomIcon sx={{ fontSize: 16 }} />
              </Box>
              <Typography
                variant="body"
                style={{
                  color: "white",
                  marginInline: 5,
                  fontSize: "small",
                  fontWeight: "bold",
                }}
              >
                10h00 PM
              </Typography>
            </div>
            <Typography className="" variant="body" color="white">
              {prj.movie.synopsis}
            </Typography>
            <Box
              className=""
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 5,
                color: "white",
                mt: 3,
              }}
            >
              <Box
                className=""
                sx={{
                  marginY: 1,
                }}
              >
                <Typography
                  fontFamily={"Montserrat"}
                  variant={"h6"}
                  fontWeight={600}
                >
                  Director
                </Typography>
                <Divider
                  sx={{ background: " #ff8f00 ", height: 2, mb: 1 }}
                ></Divider>

                <Typography variant="body" fontSize={14}>
                  Lorem ipsum dolor sit amet.
                </Typography>
              </Box>
              <Box
                className=""
                sx={{
                  marginY: 1,
                }}
              >
                <Typography
                  fontFamily={"Montserrat"}
                  variant={"h6"}
                  fontWeight={600}
                >
                  Writer
                </Typography>
                <Divider
                  // sx={{ background: " #ffca28", height: 2, mb: 1 }}
                  sx={{ background: " #ffe082", height: 2, mb: 1 }}
                ></Divider>

                <Typography variant="body" fontSize={14}>
                  Lorem ipsum dolor sit amet.
                </Typography>
              </Box>
              <Box
                className=""
                sx={{
                  marginY: 1,
                }}
              >
                <Typography
                  fontFamily={"Montserrat"}
                  variant={"h6"}
                  fontWeight={600}
                >
                  Stars
                </Typography>
                <Divider
                  sx={{ background: "#ffe082", height: 2, mb: 1 }}
                ></Divider>
                <Typography variant="body" fontSize={14}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
                  possimus?
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
});

export default MovieInfo;
