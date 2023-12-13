/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { useContext, useEffect, useState } from "react";
import { AllContext } from "../../App";
import { IMAGE_BASE, axiosInstance } from "../../constants/constant";
import { TYPE } from "../../reducers/reducer";
import getMovieTrailer from "../../helper/getMovieTrailer";
import { currentMovies } from "../../helper/getCurrentMovie";
import { setMovies } from "../../helper/setMovis";
function Row({ title, url, category }) {
  const Context = useContext(AllContext);
  const popularMovies = Context.state.popularMovies;

  useEffect(() => {
    axiosInstance.get(url).then((response) => {
      setMovies(category, Context, response.data.results);
      console.log(`randime id ${randomeIdx}`);
    });
  }, []);

  const randomeIdx = Math.floor(Math.random() * popularMovies.length);
  console.log(`random Index ${JSON.stringify(popularMovies[randomeIdx])}`);
  if (popularMovies[randomeIdx] && popularMovies[randomeIdx].id) {
    console.log("randome id", popularMovies[randomeIdx].id);
    Context.randomeIdx = popularMovies[randomeIdx].id;
  }
  const [hoveredMovie, setHoveredMovie] = useState(null);
  return (
    <div className="row  w-[90%] flex flex-col gap-5">
      <div className="head">
        <h1 className="text-2xl font-bold text-white">{title}</h1>
      </div>
      <div className="cards px-4 h-auto">
        <div className="crd overflow-auto flex gap-2">
          {currentMovies(category, Context).map((value) => (
            <div
              key={value.id}
              className="b min-w-[100px] lg:min-w-[155px] md:min-w-[130px] relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredMovie(value)}
              onMouseLeave={() => setHoveredMovie(null)}
              onClick={() =>
                getMovieTrailer(value.id).then((trailer) => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth", 
                  });
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
