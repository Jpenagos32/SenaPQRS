import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './Components/Header'
import { Landing } from './Components/Landing'

function App() {

  return (
    <>


      <Header />

      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </>
  )
}

export default App
