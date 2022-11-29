import Logo from '../assets/techkshetra_final.png'

const Header = () => {
    return (
    <nav class="navbar main-nav">
        <div class="nav-div">
            <a href="/" class="nav-brand">
                <img className='w-24' src={Logo} alt="logo"/>
            </a>
        </div>
        <div class="nav-div items-flex">
            <ul class="navbar-flex">
                <li class="nav-item nav-active"><a href="#">Home</a></li>
                <li class="nav-item"><a href="#">Workshops</a></li>
                <li class="nav-item"><a href="">Events</a></li>
                <li class="nav-item"><a href="">Marketing</a></li>
                <li class="nav-item"><a href="">Tech Talks</a></li>
            </ul>
            <img src="images/profile.jpg" alt="" class="nav-signup profile-icon"/>
        </div>
    </nav>
    );
  };
  
  export default Header;