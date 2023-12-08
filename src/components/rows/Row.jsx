/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useContext, useEffect, useState } from "react";
import { AllContext } from "../../App";
import { IMAGE_BASE, axiosInstance } from "../../constants/constant";
import { TYPE } from "../../reducers/reducer";
import getMovieTrailer from "../../helper/getMovieTrailer";
function Row({ title, url, category }) {
  const Context = useContext(AllContext);
  const popularMovies = Context.state.popularMovies;
  
  useEffect(() => {
    axiosInstance.get(url).then((response) => {
      switch (category) {
        case "popular":
          Context.dispatch({
            type: TYPE.setPopularMovies,
            payload: response.data.results,
          });
          break;
        case "nowplaying":
          Context.dispatch({
            type: TYPE.setNowPlayingMovies,
            payload: response.data.results,
          });

          break;
        case "upcoming":
          Context.dispatch({
            type: TYPE.setUpcomingMovies,
            payload: response.data.results,
          });
          break;
        case "genre":
          Context.dispatch({
            type: TYPE.setGenreMovies,
            payload: response.data.results,
          });
          break;
        case "animated":
          Context.dispatch({
            type: TYPE.setAnimatedMovie,
            payload: response.data.results,
          });

          break;
        case "comedy":
          Context.dispatch({
            type: TYPE.setComedyMovie,
            payload: response.data.results,
          });
          break;
        case "action":
          Context.dispatch({
            type: TYPE.setActionMovie,
            payload: response.data.results,
          });
          break;
        case "adventures":
          Context.dispatch({
            type: TYPE.setAdventuresMovie,
            payload: response.data.results,
          });
          break;
        case "crime":
          Context.dispatch({
            type: TYPE.setCrimeMovie,
            payload: response.data.results,
          });
          break;
        case "documentary":
          Context.dispatch({
            type: TYPE.setDocumenatry,
            payload: response.data.results,
          });
          break;
        case "drama":
          Context.dispatch({
            type: TYPE.setDramaMovie,
            payload: response.data.results,
          });
          break;
        case "fantasy":
          Context.dispatch({
            type: TYPE.setFantasyMovie,
            payload: response.data.results,
          });
          break;
        case "horror":
          Context.dispatch({
            type: TYPE.setHorrorMovie,
            payload: response.data.results,
          });
          break;
        case "music":
          Context.dispatch({
            type: TYPE.setMusicMovie,
            payload: response.data.results,
          });
          break;
        case "romance":
          Context.dispatch({
            type: TYPE.setRomanceMovie,
            payload: response.data.results,
          });
          break;
        case "science":
          Context.dispatch({
            type: TYPE.setscienceMovie,
            payload: response.data.results,
          });
          break;
        case "tv":
          Context.dispatch({
            type: TYPE.setTvMovie,
            payload: response.data.results,
          });
          break;
        case "thrilled":
          Context.dispatch({
            type: TYPE.setThrillerMovie,
            payload: response.data.results,
          });
          break;
        case "war":
          Context.dispatch({
            type: TYPE.setWarMovies,
            payload: response.data.results,
          });
          break;
        case "western":
          Context.dispatch({
            type: TYPE.setWesternMovie,
            payload: response.data.results,
          });
          break;
        case "toprated":
          Context.dispatch({
            type: TYPE.setTopRated,
            payload: response.data.results,
          });
          break;
        default:
          Context.dispatch({
            type: TYPE.setUpcomingMovies,
            payload: response.data.results,
          });
      }
      console.log(response.data.results);
    });
  }, []);
  const currentMovies = () => {
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
  
  console.log(popularMovies, "populasfd ");
  return (
    <div className="row  w-[90%] flex flex-col gap-5">
      <div className="head">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
      </div>
      <div className="cards px-4 h-auto">
        <div className="crd overflow-auto flex gap-2">
          {currentMovies().map((value) => (
            <img
              src={IMAGE_BASE + value.poster_path}
              alt=""
              className="w-56 cursor-pointer"
              onClick={()=>getMovieTrailer(value.id).then((trailer)=>{
                // alert(`${trailer} and ${value.id}`)
                Context.dispatch({type:TYPE.setMovieId,payload:trailer})
              })}
              key={value.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Row;
