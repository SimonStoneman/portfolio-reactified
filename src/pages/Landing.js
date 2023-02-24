import {NavLink} from 'react-router-dom';
import  './landing.css';

function Landing(props) {

    return (

      <main className="page-wrapper">

        {/* portfolio container */}
        <section className="page-section" id="work">

        <NavLink className="navbar-brand" to="/work">Work</NavLink>

        </section> 
        
        {/* about me */}

        <section className="page-section" id="about">
        
        <NavLink className="navbar-brand" to="/about">About Me</NavLink>

        </section>

        {/* contact */}
        <section className="page-section" id="contact">

        <NavLink className="navbar-brand" to="/contact">Contact Me</NavLink>

        </section>

      </main>

    )
    
  }
  
  export default Landing;
  
  