import '../assets/styles/Header.css';
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Simon's Portfolio</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Home</NavLink>
        <NavLink className="navbar-brand" to="/about">About Me</NavLink>
        <NavLink className="navbar-brand" to="/work">Work</NavLink>
        <NavLink className="navbar-brand" to="/contact">Contact Me</NavLink>
      </nav>
    </header>
  );
};

export default Header;