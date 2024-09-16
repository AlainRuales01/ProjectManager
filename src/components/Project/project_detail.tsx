import { useLocation } from "react-router-dom";
import TaskList from "../Task/task_list";
import Task from "../Task/Task";

interface ProjectDetailProps {
    name: string,
    description: string
    tasks: Task[]
}

const ProjectDetail = () => {
    const location = useLocation();
    const {name, description, tasks} = location.state as ProjectDetailProps;
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <TaskList tasks={tasks} />
        </div>
    );
}

export default ProjectDetail;