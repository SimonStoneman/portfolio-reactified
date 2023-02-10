
function ProjectDetails(props) {
    return (
        <section className="projectdetails">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>{props.deployedlink}</p>
            <p>{props.githubrepolink}</p>
            <p>{props.screenshot}</p>
        </section>
    )
}

export default ProjectDetails