import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Events from "./components/Events";
import Landing from "./components/Landing";
import Header from "./components/Navbar";
import Techtalks from "./components/Techtalks";
import Workshop from "./components/Workshop";
import ProgressBar from "react-scroll-progress-bar";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-slate-100">
        <ProgressBar bgcolor="white"/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/events" element={<Events />} />
          <Route path="/techtalks" element={<Techtalks />} />
        </Routes>
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
