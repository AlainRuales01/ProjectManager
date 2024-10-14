import { Link } from "react-router-dom";
import { TaskState } from "./task_state";
import { useContext } from "react";
import { ProjectContext } from "../Project/project_context";

interface TaskItemProps {
    id: number;
    name : string;
    description : string;
    taskState: TaskState;
}



export const TaskItem= (props: TaskItemProps) => {
    const projectsContext = useContext(ProjectContext);
    
    const handleTaskStateChange = () => {
        if (props.taskState === TaskState.DONE) {
            projectsContext.setState(props.id, false);
        } else {
            projectsContext.setState(props.id, true);
        }
        //projectsContext.changeTaskState(id, taskState === TaskState.DONE ? false : true);
    }
    return (
        <li key={props.id}>
            <div>
                <h1>{props.name}</h1>
                    <div className="flex justify-between">
                    <p>{props.description}</p>
                    <input type="checkbox" checked={props.taskState === TaskState.DONE} onChange={handleTaskStateChange}/>
                    <Link to={`/task/detail`} state={{id:props.id, name: props.name, description: props.description, taskState: props.taskState }}>
                        View Details
                    </Link>
                </div>
            </div>
        </li>
    )
}