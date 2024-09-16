import { Link } from "react-router-dom";
import Task from "../Task/Task";

interface ProjectItemProps {
    name: string
    description: string
    tasks: Task[]

}

const ProjectItem = (props: ProjectItemProps) => {
    return (
        <div className="flex">
            <p>{props.name} {props.description}</p>
            <Link to={`/project/detail`} state={{ name: props.name, description: props.description, tasks: props.tasks }}>
                View Details
            </Link>
        </div>
    );
}

export default ProjectItem;