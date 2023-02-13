import projData from '../../projects.json';
import { NavLink, Link } from 'react-router-dom';

function ProjectGallery() {

  console.log(projData);

    return (
        <section className="projectgallery">
        {projData.map((projObj, index) => {
          return (
            <div key={index}>
              <NavLink 
              className="navbar-brand" 
              style={{textDecoration: 'none'}} 
              to="/project" state={{
                name: projObj.name,
                description: projObj.description,
                deployedlink: projObj.deployedlink,
                githubrepolink: projObj.githubrepolink,
                screenshot: projObj.screenshot 
              }}>
                <h2>{projObj.name}</h2>
              </NavLink>

              <img src={projObj.screenshot} alt='' width="700" height="700"></img>

            </div>
          )
        })}
      </section>
    )
}

export default ProjectGallery;