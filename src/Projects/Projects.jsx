import React from "react";
import Project from "./Parts/Project";

const Projects = (props) => {
    return (
    <div>
        <h1>My projects</h1>
        {props.projects.map(project => 
            <Project project={project} />
        )}
    </div>
    )
}

export default Projects;