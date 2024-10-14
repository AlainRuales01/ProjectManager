import { TaskItem } from "./task_item";
import Task from "./task";

interface TaskListProps {
    tasks: Task[];
}


const TaskList = (props:TaskListProps) => {
    return (
        <div>
            <ul>
                <ol>
                    {props.tasks.map((task) => (
                        <TaskItem key={task.id} id={task.id} name={task.name} description={task.description} taskState={task.taskState} />
                    ))}
                </ol>
            </ul>
                
        </div>
    );
};

export default TaskList;