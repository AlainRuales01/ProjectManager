import ProjectItem from "./project_item";

interface ProjectListProps {
    
}

const ProjectList = (props: ProjectListProps) => {
    return (
        <ul>
            <li>
                <ProjectItem name="Project 1" description="Description 1" />
            </li>
            <li>
                <ProjectItem name="Project 2" description="Description 2" />
            </li>
        </ul>
            

    );
}

export default ProjectList;