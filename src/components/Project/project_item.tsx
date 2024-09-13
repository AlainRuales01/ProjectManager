import { Link } from "react-router-dom";

interface ProjectItemProps {
    name: string
    description: string
}

const ProjectItem = (props: ProjectItemProps) => {
    return (
        <div className="flex">
            <p>{props.name} {props.description}</p>
            <Link to={`/project/detail`} state={{ name: props.name, description: props.description }}>
                View Details
            </Link>
        </div>
    );
}

export default ProjectItem;