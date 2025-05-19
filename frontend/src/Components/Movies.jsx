// import React from "react";
// import ImgMediaCard from "./ImgMediaCard";

// const Movies = () => {
//   return (
//     <div className="b2" style={{ marginTop: "1rem", marginBottom: "1rem" }}>
//       <ImgMediaCard />
//     </div>
//   );
// };

// export default Movies;

import React from "react";
import MovieCarousel from "../Components/MovieCarousel";

const movies = [
  {
    title: "Inception",
    poster: "/public/40 ACRES (2024).jpg",
  },
  {
    title: "Interstellar",
    poster: "/public/ENVERS & CONTRE TOUS (2023).jpg",
  },
  {
    title: "Tenet",
    poster: "https://image.tmdb.org/t/p/w200/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
  },
  {
    title: "The Batman",
    poster: "https://image.tmdb.org/t/p/w200/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
  {
    title: "Dune",
    poster: "https://image.tmdb.org/t/p/w200/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  },
  {
    title: "Avatar",
    poster: "https://image.tmdb.org/t/p/w200/kyeqWdyUXW608n0w4eKTI6F3nq9.jpg",
  },
];

const Movies = () => {
  return (
    <div style={{ padding: "20px" }}>
      <MovieCarousel movies={movies} />
    </div>
  );
};

export default Movies;
