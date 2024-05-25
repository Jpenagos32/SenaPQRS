import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header'
import { Landing } from './Components/Landing'
import { Footer } from './Components/Footer'
import { Radicacion } from './Components/Radicacion'

function App() {

  return (
    <>


      <Header />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/pqrs' element={<Radicacion />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
