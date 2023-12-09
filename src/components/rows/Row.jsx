/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useContext, useEffect, useState } from "react";
import { AllContext } from "../../App";
import { IMAGE_BASE, axiosInstance } from "../../constants/constant";
import { TYPE } from "../../reducers/reducer";
import getMovieTrailer from "../../helper/getMovieTrailer";
import { currentMovies } from "../../helper/getCurrentMovie";
// import { InitialValues } from "../../helper/reducerInitial";
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
      
      console.log(`randime id ${randomeIdx}`);
    });
  }, []);

  const randomeIdx=Math.floor(Math.random()*popularMovies.length)
  console.log(`random Index ${JSON.stringify(popularMovies[randomeIdx])}`);
  if(popularMovies[randomeIdx] && popularMovies[randomeIdx].id){
    console.log('randome id',popularMovies[randomeIdx].id);
    Context.randomeIdx=popularMovies[randomeIdx].id
  }
  const [hoveredMovie, setHoveredMovie] = useState(null);
  return (
    <div className="row  w-[90%] flex flex-col gap-5">
      <div className="head">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
      </div>
      <div className="cards px-4 h-auto">
        <div className="crd overflow-auto flex gap-2">
          {currentMovies(category,Context).map((value) => (
            <div
              key={value.id}
              className="b min-w-[100px] lg:min-w-[155px] md:min-w-[130px] relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredMovie(value)}
              onMouseLeave={() => setHoveredMovie(null)}
              onClick={() =>
                getMovieTrailer(value.id).then((trailer) => {
                  // alert(`${trailer} and ${value.id}`)
                  // window.scrollTo({
                  //   top: 0,
                  //   behavior: 'smooth', // Optional: adds smooth scrolling effect
                  // });
                  Context.dispatch({
                    type: TYPE.setMovieId,
                    payload: trailer,
                  });
                })
              }
            >
              <img
                src={IMAGE_BASE + value.poster_path}
                alt=""
                className="w-56 "
                key={value.id}
              />
              {hoveredMovie && hoveredMovie.id === value.id && (
                <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-75 text-white p-2 text-center h-full flex items-center justify-center transition ease-in-out delay-150 ">
                  {value.original_title}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Row;
