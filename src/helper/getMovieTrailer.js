import { API_KEY, axiosInstance } from "../constants/constant";

const getMovieTrailer = async (movieId) => {
    try {
      const response = await axiosInstance.get(`movie/${movieId}?api_key=${API_KEY}&append_to_response=videos`);
      const data = response.data;
      const trailerKey = data.videos.results.find((video) => video.type === "Trailer")?.key;
      if (trailerKey) {
        return trailerKey;
      }
    } catch (err) {
      alert(`err in trailer ${err}`);
    }
  };
export default getMovieTrailer;
