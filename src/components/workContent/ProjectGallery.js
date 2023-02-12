import projData from '../../projects.json';
import { NavLink } from 'react-router-dom';

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
              to={{
                pathname:"/project",
                state:{name:'blah'}
              }}
                //   
                
                // name:`${projObj.name}`,
              
                // description: {
                //   description:`${projObj.description}`
                // },
                // deploylink: {
                //   deployedlink:`${projObj.deployedlink}`
                // },
                // githubrepolink: {
                //   githubrepolink:`${projObj.githubrepolink}`
                // },
                // screenshot: {
                //   screenshot:`${projObj.screenshot}`
                // }  
                                
              >
                <h2>{projObj.name}</h2>
              </NavLink>

              <img src={projObj.screenshot} alt=''></img>

            </div>
          )
        })}
      </section>
    )
}

export default ProjectGallery;