import {FaRegCopyright} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {RiTrademarkFill, RiInstagramFill, RiYoutubeFill, RiMailFill} from "react-icons/ri"

const Footer = () => {
    return (
      <div className="flex items-center justify-between px-6 h-24 bg-black border-t border-gray-600 smm:px-1">
        <div className="flex items-center">
            <FaRegCopyright/>
            <p className="pl-2">Techkshetra</p>
            <RiTrademarkFill className="pb-1"/> 
            <p className="pl-2">2022</p>
        </div>
        <div className="flex items-center">
          <a href=""><RiInstagramFill size={32}/></a>
          <a href=""><RiYoutubeFill size={36}/></a>
          <a href=""><MdEmail size={36}/></a>
        </div>
        <div>
            <p className="uppercase font-semibold text-right" >Biggest <span className="px-1 rounded-sm underline bg-white text-black">Techfest</span> in Kochi!</p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  