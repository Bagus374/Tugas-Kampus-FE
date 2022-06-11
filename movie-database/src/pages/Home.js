import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import { useState } from "react";
import data from "../utils/constants/data";

function Home() {
  const [movies, setMovies] = useState(data);

  return (
    <>
      <Hero />
      <Movies title="Latest Movie" movies={movies} setMovies={setMovies} />
    </>
  );
}

export default Home;
