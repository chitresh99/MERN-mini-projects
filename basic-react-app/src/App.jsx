import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom' 

function App() {
  
  return (
    <>
    <div className='flex justify-center mt-3 mb-4'>
    <p className='font-style: normal font-bold	font-weight: 700 text-slate-200	color: rgb(226 232 240) text-3xl	font-size: 1.875rem line-height: 2.25rem'> Sass App </p> 
    </div>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
