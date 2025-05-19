import { Box } from "@mui/material";
import Route from "../src/Router/index";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Box>
        <Header />
        <Route />
      </Box>
    </div>
  );
};

export default App;
