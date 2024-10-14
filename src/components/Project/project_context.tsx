import { createContext } from 'react';
import { Project } from './project';

interface ProjectContextInterface {
    projects: Project[];
    setState: (taskId: number, newState: boolean) => void;
};

export const ProjectContext = createContext<ProjectContextInterface>({
    projects: [],
    setState: () => {}
});

