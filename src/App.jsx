import Favorites from "./assets/pages/Favorites";
import TowelsCard from "./components/TowelsCard";
import Home from "./assets/pages/Home";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div> <NavBar/>
    <main className="main-content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/towels" element={<TowelsCard />} />
    </Routes>
    </main>
    </div>
    );
    }
    

export default App;
