import './App.css'
import Ping from './components/atoms/Ping.jsx';
import CreateProject from './pages/CreateProject.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<CreateProject />} />
        <Route path="/ping" element={<Ping />} />
      </Routes>
    </>
  )
}

export default App;
