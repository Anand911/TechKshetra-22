import Logo from "../assets/techkshetra_final.png";
import ProfilImage from "../assets/profile.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex fixed w-full top-0 uppercase justify-between items-center h-24 bg-black border-b border-gray-600">
      <div class="nav-div">
        <Link to="/">
          <img className="h-16" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="flex">
        <Link to="/workshop" className="p-4 mx-6">
          Workshops
        </Link>
        <Link to="/events" className="p-4 mx-6">
          Events
        </Link>
        <Link to="/techtalks" className="p-4 mx-6">
          Tech Talks
        </Link>
        <img
          className="h-12 rounded-full mr-8"
          src={ProfilImage}
          alt="profile image"
        />
      </div>
    </nav>
  );
};

export default Header;
