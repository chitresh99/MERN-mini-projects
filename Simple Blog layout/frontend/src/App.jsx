import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
