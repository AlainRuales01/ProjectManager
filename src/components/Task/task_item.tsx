import { Link } from "react-router-dom";

interface TaskItemProps {
    name : string;
    description : string;
}

export const TaskItem= (props: TaskItemProps) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <Link to={`/task/detail`} state={{ name: props.name, description: props.description }}>
                View Details
            </Link>

        </div>
    )
}