import { FaRegCopyright } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  RiTrademarkFill,
  RiInstagramFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-6 h-24 bg-black border-t border-gray-600 smm:px-1 sm:flex-col sm:py-2">
      <div className="flex items-center">
        <FaRegCopyright />
        <p className="pl-2">Techkshetra</p>
        <RiTrademarkFill className="pb-1" />
        <p className="pl-2">2022</p>
      </div>
      <div className="flex items-center">
        <a href="https://www.instagram.com/techkshetra2022/">
          <RiInstagramFill size={32} className="sm:h-[22px]" />
        </a>
        <a href="https://www.youtube.com/channel/UCwBXpl2AF_3N5F-H3JO0yLw">
          <RiYoutubeFill size={36} className="sm:h-6" />
        </a>
        <a href="mailto: office@rajagiritech.edu.in">
          <MdEmail size={36} className="sm:h-6" />
        </a>
      </div>
      <div>
        <Link to="/termsofservice" className="pr-4 underline">
          Terms of Service
        </Link>
        <Link to="/privacypolicy" className="underline">
          Privacy Policy
        </Link>
      </div>
      <div>
        <p className="uppercase font-semibold text-right">
          Biggest{" "}
          <span className="px-1 rounded-sm underline bg-white text-black">
            Techfest
          </span>{" "}
          in Kochi!
        </p>
      </div>
    </div>
  );
};

export default Footer;
