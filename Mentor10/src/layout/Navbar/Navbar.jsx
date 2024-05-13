import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
    <Link to={"/"} >Home</Link>
    <Link to={"/smartphones"} >Smartphones</Link>
    <Link to={"/laptops"} >Laptops</Link>
    <Link to={"/skincare"} >Skincare</Link>

    </nav>
  )
}

export default Navbar
