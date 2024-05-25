import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header'
import { Landing } from './Components/Landing'
import { Footer } from './Components/Footer'

function App() {

  return (
    <>


      <Header />

      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
