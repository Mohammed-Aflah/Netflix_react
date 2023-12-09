const TYPE = {
  soundeMuteInBg: "mutesoundbanner",
  setPopularMovies: "setPopularMovies",
  setNowPlayingMovies: "setNowPlayingMovies",
  setUpcomingMovies: "setUpcomingMovies",
  setActionMovie: "setActionMovie",
  setAdventuresMovie: "setAdventuresMovie",
  setAnimatedMovie: "setAnimatedMovie",
  setComedyMovie: "setComedyMovie",
  setCrimeMovie: "setCrimeMovie",
  setDocumenatry: "setDocumenatry",
  setDramaMovie: "setDramaMovie",
  setFantasyMovie: "setFantasyMovie",
  setHorrorMovie: "setHorrorMovie",
  setMusicMovie: "setMusicMovie",
  setRomanceMovie: "setRomanceMovie",
  setscienceMovie: "setscienceMovie",
  setTvMovie: "setTvMovie",
  setThrillerMovie: "setThrillerMovie",
  setWarMovies: "setWarMovies",
  setWesternMovie: "setWesternMovie",
  setGenreMovies: "setGenreMovies",
  setTopRated: "settopRatedMovies",
  setMovieId: "setMovieId",
  setRandomeIndex:"setRandomeIndex"
};
const reducer = (state, action) => {
  switch (action.type) {
    case TYPE.soundeMuteInBg:
      return {
        ...state,
        bannersoundMute: !state.bannersoundMute,
      };
    case TYPE.setPopularMovies:
      return {
        ...state,
        popularMovies: action.payload,
      };
    case TYPE.setNowPlayingMovies:
      return {
        ...state,
        nowPlayingMovie: action.payload,
      };
    case TYPE.setUpcomingMovies:
      return {
        ...state,
        upComingMovie: action.payload,
      };
    case TYPE.setActionMovie:
      return {
        ...state,
        actionMovies: action.payload,
      };
    case TYPE.setAdventuresMovie:
      return {
        ...state,
        adventuresMovie: action.payload,
      };
    case TYPE.setAnimatedMovie:
      return {
        ...state,
        animatedMovie: action.payload,
      };
    case TYPE.setComedyMovie:
      return {
        ...state,
        comedyMovie: action.payload,
      };
    case TYPE.setCrimeMovie:
      return {
        ...state,
        crimeMovie: action.payload,
      };
    case TYPE.setDocumenatry:
      return {
        ...state,
        documentaryMovie: action.payload,
      };
    case TYPE.setDramaMovie:
      return {
        ...state,
        dramaMovie: action.payload,
      };
    case TYPE.setFantasyMovie:
      return {
        ...state,
        fantasyMovi: action.payload,
      };
    case TYPE.setHorrorMovie:
      return {
        ...state,
        horrorMovi: action.payload,
      };
    case TYPE.setMusicMovie:
      return {
        ...state,
        musicMovi: action.payload,
      };
    case TYPE.setRomanceMovie:
      return {
        ...state,
        romanceMovie: action.payload,
      };
    case TYPE.setscienceMovie:
      return {
        ...state,
        scienceMovie: action.payload,
      };
    case TYPE.setTvMovie:
      return {
        ...state,
        tvMovie: action.payload,
      };
    case TYPE.setThrillerMovie:
      return {
        ...state,
        thrillerMovie: action.payload,
      };
    case TYPE.setWarMovies:
      return {
        ...state,
        warMovie: action.payload,
      };
    case TYPE.setWesternMovie:
      return {
        ...state,
        westernMovie: action.payload,
      };
    case TYPE.setGenreMovies:
      return {
        ...state,
        genreMovies: action.payload,
      };
    case TYPE.setTopRated:
      return {
        ...state,
        topRated: action.payload,
      };
    case TYPE.setMovieId:
      // console.log(`came ${action.payload}`)
      return {
        ...state,
        movieId: action.payload,
      };
      case TYPE.setRandomeIndex:
        return{
          ...state,
          randomeIdx:action.payload
        }
    // Add more cases for other action types as needed

    default:
      return state;
  }
};

export { reducer };
export { TYPE };
