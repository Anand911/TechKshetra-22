import Logo from "../assets/techkshetra_final.png";
import ProfilImage from "../assets/profile.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between items-center h-24">
      <div class="nav-div">
        <Link to="/">
          <img className="h-24" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="flex">
        <Link to="/workshop" className="p-4">
          Workshops
        </Link>
        <Link to="/events" className="p-4">
          Events
        </Link>
        <Link to="/techtalks" className="p-4">
          Tech Talks
        </Link>
        <img
          className="h-12 rounded-full mx-4"
          src={ProfilImage}
          alt="profile image"
        />
      </div>
    </nav>
  );
};

export default Header;
