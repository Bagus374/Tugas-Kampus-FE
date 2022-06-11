/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { StyledHero, StyledHeroLeft, StyledHeroRight } from "./Hero.styled";
import ENDPOINTS from "../../utils/constants/endpoint";

function Hero() {
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;

  async function getTrendingMovie() {
    const response = await axios(ENDPOINTS.TRENDING_MOVIE);
    return response.data.results[0];
  }

  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovie();
    const id = trendingMovie.id;
    const response = await axios(ENDPOINTS.ID_TRENDING_MOVIE(id));
    setMovie(response.data);
  }

  useEffect(getDetailMovie, []);

  return (
    <StyledHero>
      <section>
        <StyledHeroLeft>
          <h2>{movie.title}</h2>
          <h3>{genres}</h3>
          <p>{movie.overview}</p>
          <Button
            as="a"
            variant="primary"
            href={`https://www.youtube.com/watch?v=${idTrailer}`}
            target="_blank"
          >
            Watch Movie
          </Button>
        </StyledHeroLeft>
        <StyledHeroRight>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="placeholder" />
        </StyledHeroRight>
      </section>
    </StyledHero>
  );
}

export default Hero;
