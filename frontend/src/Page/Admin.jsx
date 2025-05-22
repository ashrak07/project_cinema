import { Container, Box, Divider, Stack } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import React from "react";

const Admin = () => {
  return (
    <div>
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: 8,
          }}
        >
          <Box sx={{ color: "white" }}>
            <Box>
              <Stack direction="row" alignItems="center" spacing={1}>
                <SpaceDashboardIcon />
                <Box>Dashboard</Box>
              </Stack>
            </Box>
            <Divider></Divider>
            <Box>Movie</Box>
            <Divider></Divider>
            <Box>Reservation</Box>
            <Divider></Divider>
            <Box>User</Box>
          </Box>
          <Box>2</Box>
        </Box>
      </Container>
    </div>
  );
};

export default Admin;
