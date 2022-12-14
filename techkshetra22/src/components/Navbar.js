import Logo from "../assets/techkshetra_final.png";
import { Link } from "react-router-dom";
import "../App.css";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <nav className="flex fixed w-full top-0 uppercase justify-between items-center h-24 bg-black border-b border-gray-600 smm:text-center">
      <div class="nav-div">
        <Link to="/">
          <img className="h-16 smm:h-8 sm:h-10" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="flex smm:items-center">
        <ul className="flex smm:items-center">
          <li>
            <Link
              to="/workshop"
              className="block p-4 mx-6 link link-underline link-underline-black md:mx-1 smm:text-[12px] smm:px-0 sm:text-[13px]"
            >
              Workshops
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="block p-4 mx-6 link link-underline link-underline-black md:mx-1 smm:text-[12px] smm:px-0 sm:text-[13px]"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/competitions"
              className="block p-4 mx-6 link link-underline link-underline-black md:mx-1 smm:text-[12px] smm:px-0 sm:text-[13px]"
            >
              Competitions
            </Link>
          </li>


        </ul>
        
        
        
        <Avatar />
      </div>
    </nav>
  );
};

export default Header;
