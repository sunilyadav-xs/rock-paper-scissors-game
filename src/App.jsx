import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SelectionPart from './components/SelectionPart'
import GamePart from './components/GamePart'
import GameContextProvider from './context/GameContextProvider'

function App() {
  
  return (
    <GameContextProvider>
    <main className='container'>
      <Header />
      <SelectionPart />
      <GamePart />
      <Footer />
    </main>
    </GameContextProvider>
  )
}

export default App
