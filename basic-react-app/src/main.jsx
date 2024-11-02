import React from 'react'
import ReactDom from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import { Home } from './components/Home'
import { Weatherapp } from './components/Weatherapp'
import { Currencyapp } from './components/Currencyapp'
import { Passwordgen } from './components/Passwordgen'

const router = createBrowserRouter([
  {
    path : '/',
    element: <App/>,
    children:[
      {path: '/',element: <Home/>},
      {path: '/weatherapp',element:<Weatherapp/>},
      {path:'/currencyapp',element:<Currencyapp/>},
      {path:'/passwordgenerator',element:<Passwordgen/>}
    ]
  }
])



ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
