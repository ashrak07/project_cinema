import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

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
                label="Thriller outlined"
                variant="outlined"
                sx={{ color: "white" }}
              ></Chip>
            </Box>
            <Typography
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "300px", // ou 100%, selon le cas
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium totam, libero ad eaque assumenda consequatur veniam
              ex. Atque, consequuntur non. Quas ad repellat distinctio ratione
              error quam. Labore, cupiditate repellendus!
            </Typography>
            <div>
              <Box
                className=""
                sx={{
                  marginY: 1,
                }}
              >
                <Typography>Director</Typography>
                <Typography>Lorem ipsum dolor sit amet.</Typography>
              </Box>
              <Box
                className=""
                sx={{
                  marginY: 1,
                }}
              >
                <Typography>Director</Typography>
                <Typography>Lorem ipsum dolor sit amet.</Typography>
              </Box>
              <Box
                className=""
                sx={{
                  marginY: 1,
                }}
              >
                <Typography>Director</Typography>
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
