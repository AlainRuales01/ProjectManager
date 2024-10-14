import { useLocation } from "react-router-dom";
import { TaskState } from "./task_state";
import { ProjectContext } from "../Project/project_context";
import { useContext } from "react";


interface TaskDetailProps {
    id: number;
    name : string;
    description : string;
    taskState: TaskState;
}

export const TaskDetail= () => {
    const location = useLocation();
    const {id, name, description, taskState} = location.state as TaskDetailProps;
    const projectsContext = useContext(ProjectContext);

    
    const handleTaskStateChange = () => {
        if (taskState === TaskState.DONE) {
            projectsContext.setState(id, false);
        } else {
            projectsContext.setState(id, true);
        }
        //projectsContext.changeTaskState(id, taskState === TaskState.DONE ? false : true);
    }

    return (
        <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <input type="checkbox" onChange={handleTaskStateChange} checked={taskState === TaskState.DONE}/>
        </div>
    )
}

export default TaskDetail;