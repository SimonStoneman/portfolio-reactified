import ProjectDetails from '../components/ProjectDetails'

function Project(props) {
    return (
        <main>
            <ProjectDetails               
                name={props.name}
                description={props.description}
                deployedlink={props.deployedlink}
                githubrepolink={props.githubrepolink}
                screenshot={props.screenshot}
            />
        </main>
    )
  }
  
  export default Project;