
function ProjectDetails(props) {

    return (
        <section className="projectdetails">
            <h2>{props.name}</h2>
            <div>
                <div>
                    <h4>Description</h4>
                    <p>{props.description}</p>
                </div>
                <div>
                    <h4>Github Deployed Page Link</h4>
                    <a href={props.deployedlink}>{props.deployedlink}</a>
                </div>
                <div>
                    <h4>Github Repository Link</h4>
                    <a href={props.githubrepolink}>{props.githubrepolink}</a>
                </div>
                <div>
                    <img src={props.screenshot} alt=''></img>
                </div>
            </div>
        </section>
    );

};

export default ProjectDetails