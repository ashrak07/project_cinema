import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const LoginForm = () => {
  return (
    <div>
      <Box sx={{ marginBlock: 3 }}>
        <Typography variant="subtitle">Email</Typography>
        <TextField fullWidth></TextField>
      </Box>
      <Box>
        <Typography>Password</Typography>
        <TextField fullWidth> </TextField>
      </Box>
      <Box sx={{ marginTop: 3 }}>
        <Button fullWidth variant="contained">
          LOGIN
        </Button>
      </Box>
    </div>
  );
};

export default LoginForm;
