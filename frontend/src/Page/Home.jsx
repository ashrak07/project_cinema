import React from "react";
import DateHeader from "../Components/DateHeader";
import ListFilm from "../Components/ListFilm";
import Movies from "../Components/Movies";
import DateComponent from "../Components/DateComponent";
import MovieInfo from "../Components/MovieInfo";
import BookingSection from "../Components/BookingSection";
import { useSelector } from "react-redux";
// import MovieCarousel from "../Components/MovieCarousel";

const Home = () => {
  const isProjection = useSelector(
    (state) => state.projections.existingProjection
  );
  return (
    <div>
      {/* <MovieCarousel /> */}
      <Movies />
      <DateComponent />
      {isProjection ? <MovieInfo /> : null}
      {isProjection ? <BookingSection /> : null}
    </div>
  );
};

export default Home;
