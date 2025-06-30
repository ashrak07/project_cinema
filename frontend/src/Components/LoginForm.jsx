import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeToSignin, addUserData, addToken } from "../Redux/UserSlice";
import { login } from "../Services/Api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {});

  const dispatch = useDispatch();

  const fetchLogin = async () => {
    const response = await login(mail, password);
    if (response) {
      console.log("io indray ary response:", response);
      dispatch(addUserData(response.data.data));
      dispatch(addToken(response.data.accessToken));
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div>
      <Stack
        sx={{
          textAlign: "center",
          fontSize: "small",
          fontWeight: 100,
          marginTop: 1,
          marginBottom: 2,
        }}
      >
        Avez-vous déja un compte?{" "}
        <Stack
          onClick={() => dispatch(changeToSignin())}
          sx={{
            ":hover": {
              color: "#ff8f00",
              cursor: "pointer",
            },
          }}
        >
          S'inscrire
        </Stack>
      </Stack>
      <Box sx={{ marginBlock: 3 }}>
        <Typography variant="subtitle">Email</Typography>
        <TextField
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          fullWidth
        ></TextField>
      </Box>
      <Box>
        <Typography variant="subtitle"> Password</Typography>
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        >
          {" "}
        </TextField>
      </Box>
      <Box sx={{ marginTop: 3 }}>
        <Button
          onClick={fetchLogin}
          fullWidth
          variant="contained"
          sx={{
            background: "  #ff8f00",
            color: "#fff",
          }}
        >
          LOGIN
        </Button>
      </Box>
    </div>
  );
};

export default LoginForm;
