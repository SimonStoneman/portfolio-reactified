import projData from '../../projects.json';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectGallery() {

  console.log(projData);

    return (
        <section className="projectgallery">
          {/* <Carousel> */}
             {projData.map((projObj, index) => {
                return (
                  <Card style={{ width: '18rem', height: '18rem'}} key={index}>
                    <Card.Img variant="top" src={projObj.screenshot}/>
                    <Card.Body>
                      <Card.Title>

                          <NavLink 
                            className="navbar-brand"  
                            to="/project" state={{
                              name: projObj.name,
                              description: projObj.description,
                              deployedlink: projObj.deployedlink,
                              githubrepolink: projObj.githubrepolink,
                              screenshot: projObj.screenshot 
                            }}>
                                <h5>{projObj.name}</h5>
                          </NavLink>

                      </Card.Title>
                    </Card.Body>
                  </Card>
                )
              })
            }
      </section>
    )
}

export default ProjectGallery;