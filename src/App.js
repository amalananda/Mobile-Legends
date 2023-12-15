// import logo from "./logo.svg";
import "./App.css";
// import FormMala from "./jancok";
import "./index.css";
import ListNavbar from "./listnavbar";
import "bootstrap/dist/css/bootstrap.css";
import OnePiece from "./onepiece";
import HomeSearch from "./search";
import BajakLaut from "./bajaklaut";
import ZoroIs from "./zoro";
import TopSearch from "./topsearch";
import DownBody from "./downbody";

function App() {
  return (
    <div className="App">
      <OnePiece>
        {/* <div className="absolute-navbar"></div> */}

        {/* <div className="container"> */}
        <ListNavbar />

        <div className="text-center">
          <div className="anime">
            <div className="zoro-logo-search">
              <BajakLaut />
              <HomeSearch />
              <TopSearch />
              <DownBody />
            </div>
            <ZoroIs />
          </div>
        </div>
        {/* </div> */}
      </OnePiece>
    </div>
  );
}

export default App;
