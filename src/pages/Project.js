import ProjectDetails from '../components/projectContent/ProjectDetails'
import { useLocation } from 'react-router-dom';

function Project(props) {


    // const {type} = useParams();
    // const stateParamVal = useLocation().state.stateParam;

      // console.log("ProductDetails", props.location.state);

      let location = useLocation();
      let { myState } = location.state;
    //   let { stateParam } = props.location.state;

    //   console.log("Props Parameter Value - " + type);
      console.log("Props State Value - " + myState);


    return (
        <main>
            <ProjectDetails               
                // name={props.name}
                // description={props.description}
                // deployedlink={props.deployedlink}
                // githubrepolink={props.githubrepolink}
                // screenshot={props.screenshot}
            />
        </main>
    )
  }
  
  export default Project;