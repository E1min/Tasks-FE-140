import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdDarkMode } from "react-icons/md";
import { GiAbstract048 } from "react-icons/gi";

function Navbar({ mod }) {
  const [dark, setDark] = useState(false)

  function clickedmod() {
    setDark(!dark)
    mod(dark)

  }

  return (
    <div className='header '>
      <div className="logo">
        <Link to="/" className='link'>
          <GiAbstract048 className="icon" />
        </Link>
      </div>
      <nav className='nav'>
        <NavLink to="/" className='link'>Home</NavLink>
        <NavLink to="about" className='link'>About</NavLink>
        <NavLink to='gallery' className='link'>Gallery</NavLink>
        <NavLink to='contact' className='link'>Contact us</NavLink>
      </nav>
      <div className="icon">
        <MdDarkMode onClick={clickedmod} />
      </div>
    </div>

  )
}

export default Navbar
