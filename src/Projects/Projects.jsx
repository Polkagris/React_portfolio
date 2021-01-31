import React from 'react'
import "./Projects.css";

function Projects() {
    const projects = [
        "project1",
        "project2",
        "project3"
    ]
    return (
        <div>
            <h1>Projects</h1>
            <div>{projects[0]}</div>
            <div>{projects[1]}</div>
            <div>{projects[2]}</div>
        </div>
    )
}

export default Projects
