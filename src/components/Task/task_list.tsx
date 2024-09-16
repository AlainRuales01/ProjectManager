import { TaskItem } from "./task_item";

const TaskList = () => {
    return (
        <div>
            <ul>
                <li>
                    <TaskItem name="Task 1" description="This is task 1" />
                </li>
                <li>
                    <TaskItem name="Task 2" description="This is task 2" />
                </li>
                <li>
                    <TaskItem name="Task 3" description="This is task 3" />
                </li>
            </ul>
        {/* {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
        ))} */}
        </div>
    );
};

export default TaskList;