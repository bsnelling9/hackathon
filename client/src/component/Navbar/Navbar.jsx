import { Link } from 'react-router-dom';
import LogoImage from '../../assets/images/test.jpg';
import './Navbar.scss';

const NavBar = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo-box">
          <img className="nav__logo" src={LogoImage} alt="img" />
        </Link>
        <input className="nav__search" placeholder="Search..."></input>
        <Link className="nav__btn" to="/upload">
          Upload
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
