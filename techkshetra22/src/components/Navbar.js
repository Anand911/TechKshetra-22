import Logo from '../assets/techkshetra_final.png'
import ProfilImage from '../assets/profile.jpg'

const Header = () => {
    return (
    <nav className="flex justify-between items-center h-24">
        <div class="nav-div">
            <a href="#" class="nav-brand">
                <img className="h-24" src={Logo} alt="logo"/>
            </a>
        </div>
        <div className="flex">
            <ul class="flex">
                <li className="p-4"><a href="">Workshops</a></li>
                <li className="p-4"><a href="">Events</a></li>
                <li className="p-4"><a href="">Marketing</a></li>
                <li className="p-4"><a href="">Tech Talks</a></li>
            </ul>
            <img className='h-12 rounded-full mx-4' src={ProfilImage} alt="profile image"/>
        </div>
    </nav>
    );
  };
  
  export default Header;