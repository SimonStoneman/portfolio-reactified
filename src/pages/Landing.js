import '../assets/styles/landing.css';
import {NavLink} from 'react-router-dom';

function Landing() {
    return (

      <main className="page-wrapper">
        <section className="hero-banner">
        
          <h2>Simon Stoneman</h2>
     
        </section>

        {/* about me */}

        <section className="page-section" id="about">
        
        <NavLink className="navbar-brand" style={{textDecoration: 'none'}} to="/about">About Me</NavLink>

        </section>

        {/* portfolio container */}
        <section className="page-section" id="work">

        <NavLink className="navbar-brand" style={{textDecoration: 'none'}} to="/work">Work</NavLink>

        </section> 

        {/* contact */}
        <section className="page-section" id="contact">

        <NavLink className="navbar-brand" style={{textDecoration: 'none'}} to="/contact">Contact Me</NavLink>

        </section>

      </main>

    )
  }
  
  export default Landing;
  
  