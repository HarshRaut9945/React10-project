
import './App.css'
import { useState } from 'react';
import GamePlay from './components/GamePlay';
import StartGame from './components/StartGame';

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);  
   const toggleGameStart = () => {
    setIsGameStarted((prev) => !prev);
   }

  return (
    <>
    {isGameStarted ? <GamePlay/> : <StartGame
    toggle={toggleGameStart}
    />  }
       
    </>
  )
}

export default App
