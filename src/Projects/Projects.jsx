import React from "react";

const Projects = () => {

    const projectsArray = [
        "project1",
        "project2",
        "project3"
    ]

    return (
    <div>
        <div>{projectsArray[0]}</div>
        <div>{projectsArray[1]}</div>
        <div>{projectsArray[2]}</div>
    </div>
    )
}

export default Projects;