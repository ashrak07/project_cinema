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
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          laudantium accusantium odio sequi repudiandae laboriosam rerum porro
          quod reprehenderit facere assumenda, minima doloremque voluptatem
          nesciunt reiciendis sed, enim alias. Eos voluptas quas nihil
          accusantium. Nihil eum iusto asperiores ab quasi voluptatibus. Sit
          vitae exercitationem magni minima fugiat error expedita pariatur
          incidunt deleniti. Veritatis, aliquam.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
          ipsa magnam dolorem deserunt dolorum accusamus pariatur quod corporis
          aliquam ut! Obcaecati expedita rem ullam quidem incidunt quo deleniti
          itaque rerum eveniet error fuga, dolorem assumenda. Quidem, eum.
          Pariatur facere cumque reiciendis alias error, id voluptas
          voluptatibus magnam dolores distinctio temporibus? Laudantium qui
          dicta praesentium aliquam quia porro obcaecati dignissimos nisi
          reprehenderit esse laborum optio quae et quas culpa, voluptatibus
          exercitationem assumenda voluptates tempora ducimus! Id tempora
          molestias officia fugit, quod dolore laudantium distinctio qui iure
          adipisci facere inventore voluptatem non aliquid consectetur labore
          perferendis ab tempore? Veritatis delectus quos unde ratione
          dignissimos autem ipsam voluptatum aut atque in suscipit soluta
          laborum consequuntur, adipisci quidem? Modi recusandae rem nulla
          eligendi voluptate impedit ea nostrum error?
        </div>
        <div>Lorem ipsum dolor sit amet.</div>
      </Container>
    </div>
  );
};

export default Admin;
