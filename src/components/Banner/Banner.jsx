// import React from "react";
import Navbar from "../header/Navbar";
import YouTube from "react-youtube";
import { FaPlay } from "react-icons/fa";
import { PiWarningCircleBold } from "react-icons/pi";
import { useContext, useEffect, useRef } from "react";
import { IoVolumeMute } from "react-icons/io5";
import { ImVolumeMute } from "react-icons/im";
import { AllContext } from "../../App";
import { TYPE } from "../../reducers/reducer";
import getMovieTrailer from "../../helper/getMovieTrailer";
// import { Sample } from "../../constants/constant";
function Banner() {
  const youtubeRef = useRef(null);
  const onPlayerReady = (event) => {
    youtubeRef.current = event.target;

    youtubeRef.current.mute();
    youtubeRef.current.setVolume(50);
  };
  const handleMute = () => {
    Context.dispatch({ type: TYPE.soundeMuteInBg, payload: false });
    {
      Context.state.bannersoundMute
        ? youtubeRef.current.unMute()
        : youtubeRef.current.mute();
    }
  };
  const Context = useContext(AllContext);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    script.onload = () => {
      // The YouTube API script has loaded
      // Now you can render the YouTube component
    };
    console.log(Context.randomeIdx,' in banner');
    getMovieTrailer(Context.randomeIdx)
      .then((trailer) => {
        // alert(`${trailer} in banner`)
        Context.dispatch({ type: TYPE.setMovieId, payload: trailer });
      })
      .catch((error) => {
        console.error(error);
      });
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const opts = {
    height: "100%",
    width: "100%",
    // playerVars: {
    //   autoplay: 1,
    //   muted: 1,
    //   controls: 0,
    //   modestbranding: 1, // Hide the YouTube logo in the control bar
    //   disablekb: 1,      // Disable keyboard controls
    //   enablejsapi: 0,    // Disable the JavaScript API (prevents sharing links)
    //   loop: 1,           // Enable video looping
    //   playlist: '2g811Eo7K8U', // Set the video ID as a playlist for looping
    // },
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      modestbranding: 1, // Hide the YouTube logo in the control bar
      disablekb: 1, // Disable keyboard controls
      enablejsapi: 0, // Disable the JavaScript API (prevents sharing links)
      loop: 1, // Enable video looping
      playlist: Context.state.movieId, // Set the video ID as a playlist for looping
      //   controls: 0,
    },
  };
  const youtubeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    objectFit: "cover",
  };
  // console.log(`${Context.state.movieId} aft`);
  return (
    <div
      className="banner w-full h-[370px] md:h-[450px] lg:h-[670px] bg-cover bg-no-repeat relative"
      //  style={{background:`url(${Sample})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",objectFit:"cover"}}
    >
      <Navbar />
      <div className="absolute top-0 left-0 w-full h-full bottom-0">
        <YouTube
          key={Context.state.movieId} // Add key prop
          videoId={Context.state.movieId}
          opts={opts}
          onReady={onPlayerReady}
          autoplay
          style={youtubeStyle}
        />
      </div>
      <div className="flex flex-wrap h-[85%]">
        <div className="md:w-1/2 sm:w-[75%] flex flex-col justify-center px-14  z-40">
          <div className="flex flex-col lg:w-[75%] gap-5  sm:w-[400px]">
            <h1 className="text-2xl md:text-4xl text-white  lg:text-6xl mb-10">
              Movie Name 
            </h1>
            <p className="text-white text-lg lg:text-1xl">
              A group of cold case investigators stay at the Carmichael Manor,
              site of the grisly and unsolved murders of the Carmichael family
              back in the
            </p>
            <div className="flex gap-9">
              <button className="py-2 px-8  flex items-center gap-3 bg-slate-50 rounded-sm">
                <FaPlay /> <p className="font-bold text-1xl">Play</p>
              </button>
              <button className="py-2 px-3  flex items-center gap-1 text-1xl text-white opacity-15 bg-gray-500">
                <p className="font-bold">More Info</p>
                <PiWarningCircleBold className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 ">
          <div
            className="absolute right-7 text-white bg-transparent border rounded-full p-3 bottom-44 cursor-pointer"
            onClick={handleMute}
          >
            {Context.state.bannersoundMute ? (
              <IoVolumeMute />
            ) : (
              <ImVolumeMute />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
