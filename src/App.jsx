import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'

function App() { 
  
  return (
      <div>
        <NavBar/>
        <Routes>
          <Route path='/logs' element={<Home/>}/>
        </Routes>
      </div>
  )
}

export default App
