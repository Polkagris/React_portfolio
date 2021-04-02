import React, {useContext} from "react";
import Project from "./Parts/Project";
import { ProjectContext } from '../App';

const Projects = (props) => {

const projectFromContext = useContext(ProjectContext)

console.log("context in parent component:", projectFromContext);

    return (
    <div>
        <h1>My projects</h1>
        {projectFromContext.map(project => 
            <Project project={project} />
        )}
    </div>
    )
}

export default Projects;