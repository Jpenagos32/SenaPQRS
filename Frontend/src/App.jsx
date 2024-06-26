import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header'
import { Landing } from './Components/Landing'
import { Footer } from './Components/Footer'
import { Radicacion } from './Components/Radicacion'
import { Listado } from './Components/Listado'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/pqrs' element={<Radicacion />} />
        <Route path='/list' element={<Listado />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
