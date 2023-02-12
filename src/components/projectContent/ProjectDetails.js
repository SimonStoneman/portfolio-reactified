import { useLocation } from 'react-router-dom';

function ProjectDetails(props) {

    // console.log("ProductDetails", props.location.state);

    let location = useLocation();

    console.log("ProductDetails", location);

    // return (
    //     <section className="projectdetails">
    //         <h2>{props.location.name}</h2>
    //         <p>{props.location.description}</p>
    //         <p>{props.location.deployedlink}</p>
    //         <p>{props.location.githubrepolink}</p>
    //         <p>{props.location.screenshot}</p>
    //     </section>
    // )
}

export default ProjectDetails