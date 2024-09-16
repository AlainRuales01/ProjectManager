import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import ProjectDetail from './components/Project/project_detail';
import TaskDetail  from './components/Task/task_detail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/project/detail" element={<ProjectDetail />} />
        <Route path='/task/detail' element={<TaskDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
