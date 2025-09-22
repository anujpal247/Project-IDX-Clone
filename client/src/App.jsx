import { useState } from 'react';
import './App.css'
import Ping from './components/atoms/Ping.jsx';

function App() {

  const [isvisible, setIsVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisible(!isvisible)}>Toggle</button>
      {isvisible && <Ping />}
    </>
  )
}

export default App;
