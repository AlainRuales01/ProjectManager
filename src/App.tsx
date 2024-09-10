import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import ProjectDetail from './components/Project/project_detail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/project" element={<Home /> } />
        <Route path="/project/detail" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
