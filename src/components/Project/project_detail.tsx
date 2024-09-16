import { useLocation } from "react-router-dom";
import TaskList from "../Task/task_list";

interface ProjectDetailProps {
    name: string,
    description: string
}

const ProjectDetail = () => {
    const location = useLocation();
    const {name, description} = location.state as ProjectDetailProps;
    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <TaskList/>
        </div>
    );
}

export default ProjectDetail;