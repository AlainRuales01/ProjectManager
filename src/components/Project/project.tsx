import Task from "../Task/task";

export interface Project {
    id: number;
    name: string;
    description: string;
    Task : Task[];
}
