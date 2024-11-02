import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav>
    <ul className='flex justify-center space-x-4'>
     <Link to = '/'><li>Home</li></Link>
     <Link to = '/weatherapp'><li>Weather App</li></Link>
     <Link to = '/currencyapp'><li>Currency App</li></Link>
     <Link to = '/passwordgenerator'><li>Password Generator</li></Link>
     </ul>
    </nav>
    </div>
  )
}

export default Navbar