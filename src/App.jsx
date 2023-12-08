import React, { lazy, useReducer, Suspense } from "react";
import Banner from "./components/Banner/Banner";
// import Row from "./components/rows/Row";
import { reducer } from "./reducers/reducer";
import { API_KEY } from "./constants/constant";
import ModalBox from "./components/Modal/ModalBox";
// import Navbar from "./components/header/Navbar"
const AllContext = React.createContext();
const Row = lazy(() => import("./components/rows/Row"));
function App() {
  const [state, dispatch] = useReducer(reducer, {
    bannersoundMute: false,
    popularMovies: [],
    nowPlayingMovie: [],
    upComingMovie: [],
    genreMovie: [],
    animatedMovie: [],
    comedyMovie: [],
    actionMovies: [],
    adventuresMovie: [],
    crimeMovie: [],
    documentaryMovie: [],
    dramaMovie: [],
    familyMovie: [],
    fantasyMovi: [],
    horrorMovi: [],
    musicMovi: [],
    romanceMovie: [],
    scienceMovie: [],
    tvMovie: [],
    thrillerMovie: [],
    warMovie: [],
    westernMovie: [],
    topRated: [],
    movieId: null,
  });
  return (
    <AllContext.Provider value={{ state, dispatch }}>
      <main className="">
        <Banner />
        <div className="rows bg-[#141414] flex flex-col gap-4 items-center min-h-[300px] py-10">
          <Suspense fallback={<h2>Loading</h2>}>
            <Row
              title="Popular"
              url={`movie/popular?api_key=${API_KEY}`}
              category="popular"
            />
            <Row
              title="Top Rated"
              url={`movie/top_rated?api_key=${API_KEY}`}
              category="toprated"
            />
            <Row
              title="Now Playing"
              url={`movie/now_playing?api_key=${API_KEY}`}
              category="nowplaying"
            />
            <Row
              title="Upcoming "
              url={`movie/upcoming?api_key=${API_KEY}`}
              category="upcoming"
            />
            <Row
              title="Animated"
              url={`movie/popular?api_key=${API_KEY}&with_genres=16`}
              category="animated"
            />
            <Row
              title="Comedy"
              url={`discover/movie?api_key=${API_KEY}&with_genres=35`}
              category="comedy"
            />
            <Row
              title="Action"
              url={`discover/movie?api_key=${API_KEY}&with_genres=28`}
              category="action"
            />
            <Row
              title="Sciencd and Friction"
              url={`discover/movie?api_key=${API_KEY}&with_genres=878`}
              category="science"
            />
            <Row
              title="Adventures"
              url={`discover/movie?api_key=${API_KEY}&with_genres=12`}
              category="adventures"
            />
            <Row
              title="Crime"
              url={`discover/movie?api_key=${API_KEY}&with_genres=80`}
              category="crime"
            />
            <Row
              title="Documentary"
              url={`discover/movie?api_key=${API_KEY}&with_genres=99`}
              category="documentary"
            />
            <Row
              title="Drama"
              url={`discover/movie?api_key=${API_KEY}&with_genres=18`}
              category="drama"
            />
            <Row
              title="Fantasy"
              url={`discover/movie?api_key=${API_KEY}&with_genres=14`}
              category="fantasy"
            />
            <Row
              title="Horror"
              url={`discover/movie?api_key=${API_KEY}&with_genres=27`}
              category="horror"
            />
            <Row
              title="Music"
              url={`discover/movie?api_key=${API_KEY}&with_genres=10402`}
              category="music"
            />
            <Row
              title="Romance"
              url={`discover/movie?api_key=${API_KEY}&with_genres=10749`}
              category="romance"
            />
            <Row
              title="TV"
              url={`discover/movie?api_key=${API_KEY}&with_genres=10770`}
              category="tv"
            />
            <Row
              title="Thrilled"
              url={`discover/movie?api_key=${API_KEY}&with_genres=53`}
              category="thrilled"
            />
            <Row
              title="War"
              url={`discover/movie?api_key=${API_KEY}&with_genres=10752`}
              category="war"
            />
            <Row
              title="Western"
              url={`discover/movie?api_key=${API_KEY}&with_genres=37`}
              category="western"
            />
          </Suspense>
          <ModalBox />
        </div>
      </main>
    </AllContext.Provider>
  );
}

export default App;
export { AllContext };
