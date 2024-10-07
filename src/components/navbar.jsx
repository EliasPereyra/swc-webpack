import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
  return (
    <nav className="navbar-container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
