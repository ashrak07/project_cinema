import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Movies from "../Components/Movies";
import Kids from "../Page/Kids";
import Animations from "../Page/Animation";

const index = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/animations" element={<Animations />} />
        </Routes>
      </Router>
    </div>
  );
};

export default index;
