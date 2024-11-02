import React from 'react'
import logo from '../images/logo.png'
import passwordgenerator from '../images/passwordgenerator.png'

export const Home = () => {
  return (
    <>
    <div className='flex justify-center mt-8'>
        <h1 className='font-serif font-extrabold	font-weight: 800 text-3xl font-size: 1.875rem text-slate-50	color: rgb(248 250 252)'>Welcome to our SASS APP</h1>
    </div>
    <div className='flex justify-center mt-8'>
        <p className='font-serif font-extrabold	font-weight: 800 text-3x font-size: 1.875rem text-slate-50	color: rgb(248 250 252)'>
            Here you can Genrate passwords , Convert Currencies and also check the weather
        </p>
    </div>
    <div className='flex justify-center mt-8'>
        <img className = 'object-cover h-48 w-96' src = {logo}/>
    </div>

    <div className='mt-8 flex justify-center'>

    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <h1 className='flex justify-center'> Password Generator </h1>
        <img className= 'ml-20 mb-8 mt-8 w-1/2 h-50' src= {passwordgenerator}/>
    <p class="ml-20 text-white">
        With our password Generator you can generate strong passwords
      </p>
    </div>
    </div>
    </>
  )
}
