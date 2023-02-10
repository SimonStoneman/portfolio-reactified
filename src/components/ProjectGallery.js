import projData from '../projects.json';
import { NavLink } from 'react-router-dom';

function ProjectGallery() {
    return (
        <section className="projectgallery">
        {projData.map((projObj, index) => {
          return (
            <div key={index}>
              <NavLink 
              className="navbar-brand" 
              style={{textDecoration: 'none'}} 
              to="/project"
              name={projObj.name}
              description={projObj.description}
              deployedlink={projObj.deployedlink}
              githubrepolink={projObj.githubrepolink}
              screenshot={projObj.screenshot}>
                <h2>{projObj.name}</h2>
              </NavLink>
            </div>
          )
        })}
      </section>
    )
}

export default ProjectGallery;