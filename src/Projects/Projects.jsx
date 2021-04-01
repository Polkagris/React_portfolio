import React from "react";

const Projects = (props) => {
    return (
    <div>
        <h1>My projects</h1>
        {props.projects.map(project => 
            <div>
                <h2>{project.name}</h2>
                <a href={project.link}>My project</a>
            </div>
        )}
    </div>
    )
}

export default Projects;