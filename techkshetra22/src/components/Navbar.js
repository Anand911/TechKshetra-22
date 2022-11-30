import Logo from "../assets/techkshetra_final.png";
import ProfilImage from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <nav className="flex fixed w-full top-0 uppercase justify-between items-center h-24 bg-black border-b border-gray-600">
      <div class="nav-div">
        <Link to="/">
          <img className="h-16" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="flex">
<<<<<<< HEAD
        <Link to="/workshop" className="p-4 mx-1">
          Workshops
        </Link>
        <Link to="/events" className="p-4 mx-1">
          Events
        </Link>
        <Link to="/techtalks" className="p-4 mx-1">
=======
        <Link
          to="/workshop"
          className="p-4 mx-6 link link-underline link-underline-black"
        >
          Workshops
        </Link>
        <Link
          to="/events"
          className="p-4 mx-6 link link-underline link-underline-black"
        >
          Events
        </Link>
        <Link
          to="/techtalks"
          className="p-4 mx-6 link link-underline link-underline-black"
        >
>>>>>>> 3b5e5b976ffb89d377a4e63a04642414664331e8
          Tech Talks
        </Link>
        <img
          className="h-12 rounded-full mx-8"
          src={ProfilImage}
          alt="profile image"
        />
      </div>
    </nav>
  );
};

export default Header;
