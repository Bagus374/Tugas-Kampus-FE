/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { StyledHero, StyledHeroLeft, StyledHeroRight } from "./Hero.styled";

function Hero() {
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;

  async function getTrendingMovie() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);
    return response.data.results[0];
  }

  async function getDetailMovie() {
    const trendingMovie = await getTrendingMovie();
    const id = trendingMovie.id;
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    setMovie(response.data);
  }

  useEffect(getDetailMovie, []);

  return (
    <StyledHero>
      <section>
        <StyledHeroLeft>
          <h2>{movie.Title}</h2>
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
