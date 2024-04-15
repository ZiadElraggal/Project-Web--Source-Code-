import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <header className='header'>
        <nav className='nav-menu'>
        <NavLink to="./" className={({isActive})=> isActive?
           'text-blue-800':'text-gray-500'}>
            Home
            </NavLink>
           <NavLink to="/about" className={({isActive})=> isActive?
           'text-blue-800':'text-gray-600'}>
            About
            </NavLink>
            <NavLink to="/projects" className={({isActive})=> isActive?
           'text-blue-800':'text-gray-600'}>
            Projects
            </NavLink> 
            <NavLink to="/experiences" className={({isActive})=> isActive?
           'text-blue-800':'text-gray-600'}>
            Experiences
            </NavLink> 
            <NavLink to="contact" className={({isActive})=> isActive?
           'text-blue-800':'text-gray-600'}>
            Contact
            </NavLink>
            
        </nav>
    </header>
  )
}

export default Navbar