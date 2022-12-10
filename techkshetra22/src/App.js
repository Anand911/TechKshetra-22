import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Events from "./components/Events";
import Landing from "./components/Landing";
import Header from "./components/Navbar";
import Techtalks from "./components/Techtalks";
import Workshop from "./components/Workshop";
import ProgressBar from "react-scroll-progress-bar";
import Footer from "./components/Footer";
import { Login } from "./components/Login";
import Dashboard from "./components/Dashboard";
import Loader from "./components/Loader";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import CustomerSupport from "./components/CustomerSupport";
import RefundPolicy from "./components/RefundPolicy";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-slate-100 overflow-hidden scroll-smooth">
        <ProgressBar bgcolor="white" />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/events" element={<Events />} />
          <Route path="/techtalks" element={<Techtalks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/customersupport" element={<CustomerSupport />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
        </Routes>
        <Header />
        <Footer />
      </div>
      <Loader />
    </BrowserRouter>
  );
}

export default App;
