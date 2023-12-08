import Logo from "../assets/netflix-logo.png";
import Search from "../assets/search.svg";
import Avatar from "../assets/avatar.png";
import Hamburger from "../assets/hambruger.svg";
import bgVideo from "../assets/bgvideo.mp4";
import Sample from '../assets/sample.jpg'
import axios from "axios";

const API_KEY = "e2f3d39a048dd4a457a45896927f05ca";
const IMAGE_BASE='https://image.tmdb.org/t/p/w154/'
// const BARER_TOKEN =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmYzZDM5YTA0OGRkNGE0NTdhNDU4OTY5MjdmMDVjYSIsInN1YiI6IjY1NzE3NjI2ODU4Njc4MDBjOWNiZmMzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9_Ir66A5flyDUZbKJ-UCRej5h0-eXPjodDEzrsn0sPE";
const API_REF = "https://api.themoviedb.org/3/";
const axiosInstance=axios.create({
  baseURL: API_REF,
});
export { Logo, Search, Avatar, Hamburger, bgVideo,Sample };
export{axiosInstance,API_KEY,IMAGE_BASE}
