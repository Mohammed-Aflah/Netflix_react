
const currentMovies = (category,Context) => {
    
    switch (category) {
      case "popular":
        return Context.state.popularMovies;
      case "nowplaying":
        return Context.state.nowPlayingMovie;
      case "upcoming":
        return Context.state.upComingMovie;
      case "genre":
        return Context.state.genreMovie;
      case "animated":
        return Context.state.animatedMovie;
      case "comedy":
        return Context.state.comedyMovie;
      case "action":
        return Context.state.actionMovies;
      case "adventures":
        return Context.state.adventuresMovie;
      case "crime":
        return Context.state.crimeMovie;
      case "documentary":
        return Context.state.documentaryMovie;
      case "drama":
        return Context.state.dramaMovie;
      case "fantasy":
        return Context.state.fantasyMovi;
      case "horror":
        return Context.state.horrorMovi;
      case "music":
        return Context.state.musicMovi;
      case "romance":
        return Context.state.romanceMovie;
      case "science":
        return Context.state.scienceMovie;
      case "tv":
        return Context.state.tvMovie;
      case "thrilled":
        return Context.state.thrillerMovie;
      case "war":
        return Context.state.warMovie;
      case "western":
        return Context.state.westernMovie;
      case "toprated":
        return Context.state.topRated;
      default:
        return [];
    }
  };
  export {currentMovies}