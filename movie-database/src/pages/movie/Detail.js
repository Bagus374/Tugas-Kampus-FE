import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    getRecommendationMovies();
  }, [id]);

  async function getRecommendationMovies() {
    const response = await axios(ENDPOINTS.RECOMMENDATIONS(id));
    const movies = response.data.results;
    dispatch(updateMovies(movies));
  }

  return (
    <>
      <DetailMovie />
      <Movies title="Recommendation Movies" />
    </>
  );
}

export default Detail;