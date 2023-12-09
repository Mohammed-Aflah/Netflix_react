import { TYPE } from "../reducers/reducer";

const setMovies = (category, Context, data) => {
  switch (category) {
    case "popular":
      Context.dispatch({
        type: TYPE.setPopularMovies,
        payload: data,
      });
      break;
    case "nowplaying":
      Context.dispatch({
        type: TYPE.setNowPlayingMovies,
        payload: data,
      });

      break;
    case "upcoming":
      Context.dispatch({
        type: TYPE.setUpcomingMovies,
        payload: data,
      });
      break;
    case "genre":
      Context.dispatch({
        type: TYPE.setGenreMovies,
        payload: data,
      });
      break;
    case "animated":
      Context.dispatch({
        type: TYPE.setAnimatedMovie,
        payload: data,
      });

      break;
    case "comedy":
      Context.dispatch({
        type: TYPE.setComedyMovie,
        payload: data,
      });
      break;
    case "action":
      Context.dispatch({
        type: TYPE.setActionMovie,
        payload: data,
      });
      break;
    case "adventures":
      Context.dispatch({
        type: TYPE.setAdventuresMovie,
        payload: data,
      });
      break;
    case "crime":
      Context.dispatch({
        type: TYPE.setCrimeMovie,
        payload: data,
      });
      break;
    case "documentary":
      Context.dispatch({
        type: TYPE.setDocumenatry,
        payload: data,
      });
      break;
    case "drama":
      Context.dispatch({
        type: TYPE.setDramaMovie,
        payload: data,
      });
      break;
    case "fantasy":
      Context.dispatch({
        type: TYPE.setFantasyMovie,
        payload: data,
      });
      break;
    case "horror":
      Context.dispatch({
        type: TYPE.setHorrorMovie,
        payload: data,
      });
      break;
    case "music":
      Context.dispatch({
        type: TYPE.setMusicMovie,
        payload: data,
      });
      break;
    case "romance":
      Context.dispatch({
        type: TYPE.setRomanceMovie,
        payload: data,
      });
      break;
    case "science":
      Context.dispatch({
        type: TYPE.setscienceMovie,
        payload: data,
      });
      break;
    case "tv":
      Context.dispatch({
        type: TYPE.setTvMovie,
        payload: data,
      });
      break;
    case "thrilled":
      Context.dispatch({
        type: TYPE.setThrillerMovie,
        payload: data,
      });
      break;
    case "war":
      Context.dispatch({
        type: TYPE.setWarMovies,
        payload: data,
      });
      break;
    case "western":
      Context.dispatch({
        type: TYPE.setWesternMovie,
        payload: data,
      });
      break;
    case "toprated":
      Context.dispatch({
        type: TYPE.setTopRated,
        payload: data,
      });
      break;
    default:
      Context.dispatch({
        type: TYPE.setUpcomingMovies,
        payload: data,
      });
  }
};
export { setMovies };
