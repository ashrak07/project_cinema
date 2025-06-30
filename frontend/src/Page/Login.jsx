import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";
import { useDispatch, useSelector } from "react-redux";
import { changeToLogin, changeToSignin } from "../Redux/UserSlice";

const Login = () => {
  const active = useSelector((state) => state.users.showLogin);
  const dispatch = useDispatch();
  return (
    <div>
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 5,
            color: "white",
          }}
        >
          <Box
            sx={{ background: "#37474f", borderRadius: 5, paddingInline: 5 }}
          >
            <Box
              sx={{
                borderRadius: 5,
                padding: ".1rem",
                backgroundColor: "#546e7a",
                width: "full",
                margin: "auto",
                marginTop: 3,
              }}
            >
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button
                  variant={active === "login" ? "contained" : "transparent"}
                  onClick={() => dispatch(changeToLogin())}
                  sx={{
                    backgroundColor:
                      // active === "login" ? "#ffb300" : "transparent",
                      active === "login" ? "#ff8f00" : "transparent",
                    borderRadius: 5,
                    width: "150px",
                  }}
                >
                  Login
                </Button>
                <Button
                  variant={active === "signup" ? "contained" : "transparent"}
                  onClick={() => dispatch(changeToSignin())}
                  sx={{
                    borderRadius: 5,
                    width: "150px",
                    background: active === "signup" ? "#ff8f00" : "transparent",
                  }}
                >
                  Sign Up
                </Button>
              </Stack>
            </Box>

            <Box sx={{}}>
              {active === "login" ? <LoginForm /> : <SignUpForm />}
            </Box>
          </Box>
          <Box sx={{}} className="  ">
            <Card sx={{ borderRadius: 5, position: "relative" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                image="../../public/pexels-tima-miroshnichenko-7991375.jpg"
              />
              <Typography
                sx={{
                  fontFamily: "Quicksand",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  zIndex: 1,
                  color: "white",
                  padding: 2,
                  background: "rgba(0, 0, 0, 0.5)", // fond semi-transparent
                  borderTopLeftRadius: 5,
                  borderBottomRightRadius: 5,
                  maxWidth: "100%",
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                officiis perspiciatis accusamus velit aliquid quod minima
                expedita saepe mollitia ullam ipsum repudiandae magnam
                voluptates nulla ea, dolore quas molestiae. Atque ab sint
                corporis assumenda minima nobis cumque quo rem odit voluptas
                dolore molestias tenetur inventore facere, deleniti consectetur.
                Dolor, eum!
              </Typography>
            </Card>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
