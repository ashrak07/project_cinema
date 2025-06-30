import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { signUp } from "../Services/Api";

const SignUpForm = () => {
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {});

  const fetchSignUp = async () => {
    try {
      const response = await signUp(name, mail, password);
      if (response) {
        console.log("io indray response:", response);
        setName("");
        setMail("");
        setPassword("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Box sx={{ marginBlock: 3 }}>
        <Typography variant="subtitle">Name</Typography>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        ></TextField>
      </Box>
      <Box sx={{ marginBlock: 3 }}>
        <Typography variant="subtitle">Email</Typography>
        <TextField
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          fullWidth
        ></TextField>
      </Box>
      <Box>
        <Typography variant="subtitle">Password</Typography>
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        >
          {" "}
        </TextField>
      </Box>
      <Box sx={{ marginY: 3 }}>
        <Button
          onClick={fetchSignUp}
          fullWidth
          variant="contained"
          sx={{
            background: "  #ff8f00",
            color: "white",
          }}
        >
          SIGN IN
        </Button>
      </Box>
    </div>
  );
};

export default SignUpForm;
