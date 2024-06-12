import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Equipe from './components/Equipe';


function App() {


  return (
    <div>
      <NavBar/>
      <Equipe/>
      <div className='footer'></div>
    </div>
  )
}

export default App
