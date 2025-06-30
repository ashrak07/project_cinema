import React, { useRef } from "react";
import DateHeader from "../Components/DateHeader";
import ListFilm from "../Components/ListFilm";
import MovieCarousel from "../Components/MovieCarousel";
import DateComponent from "../Components/DateComponent";
import MovieInfo from "../Components/MovieInfo";
import BookingSection from "../Components/BookingSection";
import { useSelector } from "react-redux";
// import MovieCarousel from "../Components/MovieCarousel";

const Home = () => {
  const isProjection = useSelector(
    (state) => state.projections.existingProjection
  );
  const movieInfoRef = useRef(null);
  return (
    <div>
      <MovieCarousel scrollToInfoRef={movieInfoRef} />
      <DateComponent />
      {isProjection ? <MovieInfo ref={movieInfoRef} /> : null}
      {isProjection ? <BookingSection /> : null}
    </div>
  );
};

export default Home;
