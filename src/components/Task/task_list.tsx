import Task from "./Task";
import { TaskItem } from "./task_item";

interface TaskListProps {
    tasks: Task[];
}


const TaskList = (props:TaskListProps) => {
    return (
        <div>
            <ul>
                <li>
                    {props.tasks.map((task) => (
                        <TaskItem key={task.id} name={task.name} description={task.description} />
                    ))}
                </li>
            </ul>
                
        </div>
    );
};

export default TaskList;