import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Show from './Pages/Show'

function App() { 
  
  return (
      <div>
        <NavBar/>
        <Routes>
          <Route path='/logs' element={<Home/>}/>
          <Route path='/logs/:id' element={<Show/>}/>
        </Routes>
      </div>
  )
}

export default App
