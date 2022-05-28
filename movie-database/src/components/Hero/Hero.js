/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import { StyledHero, StyledHeroLeft, StyledHeroRight } from "./Hero.styled";

function Hero() {
  const [movie, setMovie] = useState("");

  async function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data);
  }
  useEffect(fetchMovie, []);
  console.log(movie);

  return (
    <StyledHero>
      <section>
        <StyledHeroLeft>
          <h2>{movie.Title}</h2>
          <h3>Genre: {movie.Genre}</h3>
          <p>{movie.Plot}</p>
          <Button variant="primary">Watch</Button>
        </StyledHeroLeft>
        <StyledHeroRight>
          <img src={movie.Poster} alt="placeholder" />
        </StyledHeroRight>
      </section>
    </StyledHero>
  );
}

export default Hero;
