import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <nav className="navbar-nav">
          <h3 className="navbar-header">
            <Link to="/">
              <i className="fa-solid fa-clapperboard"></i>!notIMDb
            </Link>
          </h3>
          <ul className="navbar-links">
            <li className="navbar-links-link">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-links-link">
              <Link to="/lists">My Lists</Link>
            </li>
            <li className="navbar-links-link login-link">
              <Link to="/login">Login</Link>
            </li>
            <li className="navbar-links-link signup-link">
              <Link to="/register">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
   );
}

export default Navbar;