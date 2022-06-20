import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function NowPlayingMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getNowPlayingMovies() {
    const response = await axios(ENDPOINTS.NOW_PLAYING);
    const movies = response.data.results;
    dispatch(updateMovies(movies));
  }

  return (
    <>
      <Hero />
      <Movies title="Now Playing" />
    </>
  );
}

export default NowPlayingMovie;