import ProjectDetails from '../components/projectContent/ProjectDetails'
import { useLocation } from 'react-router-dom';
import './project.css';

function Project() {

      const {state} = useLocation();
   
    //   console.log("state State Value - " + JSON.stringify(state.name));

    return (
        <main>

            <ProjectDetails               
                name={state.name}
                description={state.description}
                deployedlink={state.deployedlink}
                githubrepolink={state.githubrepolink}
                screenshot={state.screenshot}
            />
            
        </main>
    )
  }
  
  export default Project;