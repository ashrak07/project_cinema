import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const SignUpForm = () => {
  return (
    <div>
      <Box sx={{ marginBlock: 3 }}>
        <Typography variant="subtitle">Name</Typography>
        <TextField fullWidth></TextField>
      </Box>
      <Box sx={{ marginBlock: 3 }}>
        <Typography variant="subtitle">Email</Typography>
        <TextField fullWidth></TextField>
      </Box>
      <Box>
        <Typography>Password</Typography>
        <TextField fullWidth> </TextField>
      </Box>
      <Box sx={{ marginY: 3 }}>
        <Button fullWidth variant="contained">
          SIGN IN
        </Button>
      </Box>
    </div>
  );
};

export default SignUpForm;
