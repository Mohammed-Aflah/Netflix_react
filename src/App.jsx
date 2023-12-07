import Banner from "./components/Banner/Banner";
import Row from "./components/rows/Row";
// import Navbar from "./components/header/Navbar"

function App() {
  return (
    <main className="">
      <Banner />
      <div className="rows bg-[#141414] flex flex-col gap-4 items-center min-h-[300px] py-10">
        <Row title="Popular" />
        <Row title="Popular" />
        <Row title="Popular" />
        <Row title="Popular" />
        <Row title="Popular" />
        <Row title="Popular" />
      </div>
    </main>
  );
}

export default App;
