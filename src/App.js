// import logo from "./logo.svg";
import "./App.css";
// import FormMala from "./jancok";
import "./index.css";
import ListNavbar from "./listnavbar";
import "bootstrap/dist/css/bootstrap.css";
import MobileLegendCard from "./game";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <ListNavbar />
      {/* change into MobileLegendCard */}
      <MobileLegendCard />
      <Footer />
    </div>
  );
}

export default App;
