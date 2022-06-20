import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function PopularMovie() {
  const [movies, setMovies] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.POPULAR);
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies title="Popular Movies" movies={movies} />
    </>
  );
}

export default PopularMovie;