import { Link } from "react-router-dom";
import '../css/Navbar.css'
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="brand">
          <Link to="/">MovieApp</Link>
        </div>

        <div className="navbar-links">
          <Link to="/" className="nav-link">
            Movies
          </Link>
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
        </div>
      </div>
    </>
  );
}
