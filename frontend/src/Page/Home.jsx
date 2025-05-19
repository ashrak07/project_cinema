import React from "react";
import DateHeader from "../Components/DateHeader";
import ListFilm from "../Components/ListFilm";
import Movies from "../Components/Movies";
import DateComponent from "../Components/DateComponent";
import MovieInfo from "../Components/MovieInfo";
import BookingSection from "../Components/BookingSection";
// import MovieCarousel from "../Components/MovieCarousel";

const Home = () => {
  return (
    <div>
      {/* <MovieCarousel /> */}
      <Movies />
      <DateComponent />
      <MovieInfo />
      <BookingSection />
    </div>
  );
};

export default Home;
