import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import ProjectDetail from './components/Project/project_detail';
import TaskDetail  from './components/Task/task_detail';
import ProjectIndex from './components/Project/project_index';
import { useState } from 'react';
import { TaskState } from './components/Task/task_state';
import { ProjectContext } from './components/Project/project_context';

function App() {

  const projectList = [
      {
          id: 1,
          name: "Project 1",
          description: "This is project 1",
          Task: [
              {
                  id: 1,
                  name: "Task 1",
                  description: "This is task 1",
                  taskState: TaskState.DONE
              },
              {
                  id: 2,
                  name: "Task 2",
                  description: "This is task 2",
                  taskState: TaskState.PENDING
              }
          ]
      },
      {
          id: 2,
          name: "Project 2",
          description: "This is project 2",
          Task: [
              {
                  id: 3,
                  name: "Task 3",
                  description: "This is task 3",
                  taskState: TaskState.PENDING
              },
              {
                  id: 4,
                  name: "Task 4",
                  description: "This is task 4",
                  taskState: TaskState.DONE
              }
          ]
      }
  ];
  
  const [projects, setProjects] = useState(projectList);

  const setState = (taskId: number, newState: boolean) => {
      debugger;
      setProjects(previousProjects => previousProjects.map(project => {
          project.Task = project.Task.map(task => {
              if (task.id === taskId) {
                  task.taskState = newState ? TaskState.DONE : TaskState.PENDING;
              }
              return task;
          });
          return project;       
      }));
  }

  return (
    
      <BrowserRouter>
        <ProjectContext.Provider value={{projects, setState}}>
          <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/project" element={<ProjectIndex />} />
            <Route path="/project/detail" element={<ProjectDetail />} />
            <Route path='/task/detail' element={<TaskDetail />} />
          </Routes>
        </ProjectContext.Provider>
      </BrowserRouter>
    
  )
}
export default App
