// import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import ListNavbar from "./listnavbar";
import "bootstrap/dist/css/bootstrap.css";
import MobileLegendCard from "./game_page/game";
import Footer from "./footer";
import GenshinImpactCard from "./genshin_impact_page/genshin_impact";

function App() {
  return (
    <div className="App">
      <ListNavbar />
      {/* change into MobileLegendCard */}
      <div className="card-game">
        <MobileLegendCard />
        <GenshinImpactCard/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
