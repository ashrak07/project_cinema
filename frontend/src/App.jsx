import { Box } from "@mui/material";
import AppRoutes from "../src/Router/index";
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";
import UpcomingMovie from "./Components/UpcomingMovie";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Box>
          <Header />
          <AppRoutes />
          {/* <UpcomingMovie /> */}
        </Box>
      </BrowserRouter>
    </div>
  );
};

export default App;
