import { useState } from "react";
import ProjectItem from "./project_item";



const ProjectList = () => {
    const initialProjects = [
        {name: "Project 1", description: "Description 1"},
        {name: "Project 2", description: "Description 2"},
        {name: "Project 3", description: "Description 3"},
        {name: "Project 4", description: "Description 4"},
    ];
    const [projects, setProjects] = useState(initialProjects);
    return (
        <ul>
            {projects.map(project => {
                return(
                    <>  
                        <li>
                            <ProjectItem name={project.name} description={project.description}/>
                        </li>
                    </>
            );
            })}
        </ul>
            

    );
}

export default ProjectList;