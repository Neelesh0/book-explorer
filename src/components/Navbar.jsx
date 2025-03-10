import { Link } from "react-router-dom";
import "./Navbar.css";
import { FcLike } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";
import { FaBook } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo"> <FaBook/> Book Explorer</h1>
        <ul className="nav-links">
          <li>
            <Link to="/"> <FcSearch/> Search</Link>
          </li>
          <li>
            <Link to="/favorites"> <FcLike/> Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
