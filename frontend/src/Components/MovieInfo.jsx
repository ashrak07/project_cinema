import React from "react";
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

const MovieInfo = () => {
  return (
    <div className="">
      <Container>
        <Card
          elevation={0}
          className=""
          sx={{
            marginY: 5,
            display: "flex",
            justifyContent: "space-between",
            background: "#263238",
            border: "none",
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            image="../../public/CAPITOL VS. CAPITOL (2025).jpg"
            sx={{
              borderRadius: 10,
              height: 500,
              width: 300,
            }}
          ></CardMedia>
          <CardContent className="" sx={{ marginLeft: 10 }}>
            <Typography variant="h3" color="white">
              Lorem ipsum dolor sit amet consectetur
            </Typography>
            <Box
              sx={{
                marginY: 2,
                display: "flex",
                gap: 2,
              }}
            >
              <Chip
                label="Thriller"
                sx={{ color: "white", background: "#546e7a" }}
              ></Chip>
              <Chip
                label="Action"
                sx={{ color: "white", background: "#546e7a" }}
              ></Chip>
              <Chip
                label="Fiction"
                sx={{ color: "white", background: "#546e7a" }}
              ></Chip>
              {/* <Chip
                label="Thriller outlined"
                variant="outlined"
                sx={{ color: "white" }}
              ></Chip> */}
            </Box>
            <div
              className=""
              style={{ marginBlock: 0, display: "flex", alignItems: "center" }}
            >
              <Box
                sx={{
                  backgroundColor: "#546e7a ",
                  color: "white",
                  width: 50,
                  borderRadius: 5,
                  paddingTop: ".1rem",
                  textAlign: "center",
                }}
              >
                <SlideshowIcon sx={{ fontSize: 20 }} />
              </Box>
              <h4 style={{ color: "white", marginInline: 5 }}>3h45mn</h4>
            </div>
            <Typography
              style={{
                color: "white",
                // textOverflow: "ellipsis",
                // width: "300px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis harum quod fuga velit possimus soluta asperiores nobis
              labore eveniet quos, beatae doloribus nam itaque delectus eum, ab
              nulla cupiditate, porro nesciunt? Repellat, optio minima autem
              eligendi temporibus quia? Ea assumenda atque minus labore sequi
              cumque sit quidem voluptatum ipsam aut incidunt cum nemo alias
              inventore quia, soluta, est libero natus repudiandae, voluptatibus
              veniam maiores saepe aliquid. Alias ipsam culpa ut exercitationem
              est magnam nesciunt, delectus ex nihil placeat suscipit sapiente.
              Esse digni sit alias quaerat neque vel reprehenderit laboriosam
              similique!
            </Typography>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
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
                <Typography>Director</Typography>
                <Divider sx={{ background: "red", height: 2 }}></Divider>

                <Typography>Lorem ipsum dolor sit amet.</Typography>
              </Box>
              <Box
                className=""
                sx={{
                  marginY: 1,
                }}
              >
                <Typography>Writer</Typography>
                <Divider sx={{ background: "red", height: 2 }}></Divider>

                <Typography>Lorem ipsum dolor sit amet.</Typography>
              </Box>
              <Box
                className=""
                sx={{
                  marginY: 1,
                }}
              >
                <Typography>Stars</Typography>
                <Divider sx={{ background: "red", height: 2 }}></Divider>
                <Typography>Lorem ipsum dolor sit amet.</Typography>
              </Box>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default MovieInfo;
