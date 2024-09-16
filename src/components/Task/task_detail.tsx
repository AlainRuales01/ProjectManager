import { useLocation } from "react-router-dom";


interface TaskDetailProps {
    name : string;
    description : string;
}

export const TaskDetail= () => {
    const location = useLocation();
    const {name, description} = location.state as TaskDetailProps;
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    )
}

export default TaskDetail;