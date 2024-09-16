import React from 'react'
import { Link } from 'react-router-dom' 

export const Navbar = () => {
  return (
    <div>
        <nav>
        <uL>
            <Link to = "/"> <li>Home</li></Link>
            <Link to = "/posts"> <li>Posts</li></Link>
        </uL>
        </nav>
    </div>
  )
}

// export default Navbar