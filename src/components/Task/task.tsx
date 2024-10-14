import { TaskState } from "./task_state";

interface Task{
    id: number;
    name: string;
    description: string;
    taskState: TaskState;
}
export default Task