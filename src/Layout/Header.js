import '../Assets/Styles/Header.css';

function Header() {
  return (
    <header>
      <h1>Simon's Portfolio</h1>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">About Me</a>
        <a className="navbar-brand" href="#">Work</a>
        <a className="navbar-brand" href="#">Contact Me</a>
      </nav>
    </header>
  );
};

export default Header;