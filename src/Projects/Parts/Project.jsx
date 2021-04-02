import React from 'react';

const Project = (props) => {
    console.log("props inside nested component:", props);
    return (
        <div>
            <h2>{props.project.name}</h2>
            <p>{props.project.description}</p>
            <a href={props.project.link}>My project</a>
        </div>
    )
}

export default Project;