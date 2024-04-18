import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SelectionPart from './components/SelectionPart'
import GamePart from './components/GamePart'
// import GameContextProvider from './context/GameContextProvider'
import { useContext, useEffect } from "react";
import gameContext from "./context/GameContext";

function App() {
  const { gameStart } =
    useContext(gameContext);
  return (
    
    <main className='container'>
      <Header />
     {gameStart ? <GamePart />
      :<SelectionPart />}
      <Footer />
    </main>
    // </GameContextProvider>
  )
}

export default App
