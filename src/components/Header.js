import '../assets/styles/header.css';
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Simon's Portfolio</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Home</NavLink>
      </nav>
    </header>
  );
};

export default Header;