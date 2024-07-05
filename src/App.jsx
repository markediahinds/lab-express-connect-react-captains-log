import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Show from './Pages/Show'
import New from './Pages/New'
import Edit from './Pages/Edit'
import Four0Four from './Components/Four0Four'


function App() { 
  
  return (
      <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Navigate to='/logs' replace/>}/>
          <Route path='/logs' element={<Home/>}/>
          <Route path='/logs/new' element={<New/>}/>
          <Route path='/logs/:id' element={<Show/>}/>
          <Route path='logs/:id/edit' element={<Edit/>}/>
          <Route path='*' element={<Four0Four/>}/>
        </Routes>
      </div>
  )
}

export default App
