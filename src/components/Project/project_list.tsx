import Task from "../Task/Task";
import ProjectItem from "./project_item";


interface Project {
    name: string;
    description: string;
    Task : Task[];
}

interface ProjectListProps {
    projects: Project[];
}


const ProjectList = (props: ProjectListProps) => {

    return (
        <ul>
            {props.projects.map(project => {
                return(
                    <>  
                        <li>
                            <ProjectItem name={project.name} description={project.description} tasks={project.Task}/>
                        </li>
                    </>
            );
            })}
        </ul>
            

    );
}

export default ProjectList;