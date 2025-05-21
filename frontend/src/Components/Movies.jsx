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
    poster: "../../public/40 ACRES (2024).jpg",
  },
  {
    title: "Interstellar",
    poster: "../../public/ENVERS & CONTRE TOUS (2023).jpg",
  },
  {
    title: "Tenet",
    poster: "../../public/CAPITOL VS. CAPITOL (2025).jpg",
  },
  {
    title: "The Batman",
    poster: "../../public/CENTAURES DE LA NIT (2024).jpg",
  },
  {
    title: "Dune",
    poster: "../../public/CORRIDA DE LA PEUR (1951).jpg",
  },
  {
    title: "Avatar",
    poster: "../../public/HEROES DE BARRIO (2022).jpg",
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
