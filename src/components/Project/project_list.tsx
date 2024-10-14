import { useContext } from "react";
import { ProjectContext } from "./project_context";
import { Link } from "react-router-dom";




const ProjectList = () => {
    const contextProjects = useContext(ProjectContext);

    return (
        <ul>
            {contextProjects.projects.map(project => 
                <ol key={project.id}>
                    <div className="flex">
                    <p>{project.name} {project.description}</p>
                    <Link to={`/project/detail`} state={{ name: project.name, description: project.description, tasks: project.Task, contextProjects}}>
                        View Details
                    </Link>
                    </div>
                </ol>
            )}
        </ul>
    );
}  

export default ProjectList;