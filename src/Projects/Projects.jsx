import React from "react";

const Projects = (props) => {
    return (
    <div>
        <div>{props.projects[0]}</div>
        <div>{props.projects[1]}</div>
        <div>{props.projects[2]}</div>
    </div>
    )
}

export default Projects;