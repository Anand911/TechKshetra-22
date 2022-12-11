import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Events from "./components/Events";
import Landing from "./components/Landing";
import Header from "./components/Navbar";
import Competitions from "./components/Competitions";
import Workshop from "./components/Workshop";
import ProgressBar from "react-scroll-progress-bar";
import Footer from "./components/Footer";
import { Login } from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import Support from "./components/Support";
import RefundPolicy from "./components/RefundPolicy";
import Success from "./components/Success";
import EventPage from "./components/EventPage";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-slate-100 overflow-hidden scroll-smooth">
        <ProgressBar bgcolor="white" />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/events" element={<Events />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/success" element={<Success />} />
          <Route path="/workshop/eventpage" element={<EventPage/>} />
        </Routes>
        <Header />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
