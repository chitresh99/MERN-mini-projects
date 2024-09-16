// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import { Home } from './Components/Home.jsx'
import { Navbar } from './Components/Navbar.jsx'
import { Posts } from './Components/Posts.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children : [
      {path : '/', element:<Home />},
      {path : '/posts/:postid', element:<Posts/>}
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
