import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div>
    
    <div className="navbar bg-base-100 shadow-sm">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><a>Item 1</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>

      <div className='flex'>
      <img src="https://i.ibb.co.com/wZzDNKg1/logo.png" alt="" />
      <a className="btn btn-ghost text-xl">Low.Bd</a>
      </div>
 
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">

      <NavLink className={({isActive})=>isActive? "bg-indigo-600 text-white":''} to="/"><li><a>Home</a></li></NavLink>

      <NavLink className={({isActive})=>isActive? "bg-indigo-600 text-white":''} to="/my_booking"><li><a>My Booking</a></li></NavLink>

      <NavLink className={({isActive})=>isActive? "bg-indigo-600 text-white":''} to="/blogs"><li><a>Blogs</a></li></NavLink>

      <NavLink className={({isActive})=>isActive? "bg-indigo-600 text-white":''} to="/contact"><li><a>Contact</a></li></NavLink>
       
        
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn bg-green-800 text-white rounded-full">Button</a>
    </div>
  </div>
    </div>
  )
}

export default Navbar
