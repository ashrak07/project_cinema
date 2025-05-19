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
    <div className="b3">
      <Container>
        <Card
          className="b4"
          sx={{
            display: "flex",
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            image="../../src/assets/40 ACRES (2024).jpg"
            sx={{
              height: 500,
              width: 300,
            }}
          ></CardMedia>
          <CardContent className="b2" sx={{}}>
            <Typography variant="h3">
              Lorem ipsum dolor sit amet consectetur
            </Typography>
            <div
              style={{
                display: "flex",
                gap: 5,
              }}
            >
              <Chip label="Thriller"></Chip>
              <Chip label="Thriller outlined" variant="outlined"></Chip>
              <Box
                sx={{
                  border: 1,
                  borderRadius: 8,
                  paddingX: 2,
                }}
              >
                Thriller
              </Box>
              <Box
                sx={{
                  border: 1,
                  borderRadius: 8,
                  paddingX: 2,
                }}
              >
                Thriller
              </Box>
              <Box
                sx={{
                  border: 1,
                  borderRadius: 8,
                  paddingX: 2,
                }}
              >
                Thriller
              </Box>
            </div>
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
                className="b1"
                sx={{
                  marginY: 1,
                }}
              >
                <Typography>Director</Typography>
                <Typography>Lorem ipsum dolor sit amet.</Typography>
              </Box>
              <Box
                className="b1"
                sx={{
                  marginY: 1,
                }}
              >
                <Typography>Director</Typography>
                <Typography>Lorem ipsum dolor sit amet.</Typography>
              </Box>
              <Box
                className="b1"
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
