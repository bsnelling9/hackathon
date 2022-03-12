import { Link } from 'react-router-dom';
import Icon from '../../assets/images/icon.jpg';
import './Navbar.scss';
const NavBar = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav__logo-box">
          <img src={Icon} class="nav__icon" />
        </Link>
        <div className="nav__right">
          <input className="nav__search" placeholder="Search..."></input>
          <Link className="nav__btn" to="/upload">
            Upload
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
