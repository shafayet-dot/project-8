import React from 'react'
import { NavLink } from 'react-router'
import Navbar from '../components/Navbar'

const ErrorPage = () => {
  return (
    <div>

     <Navbar></Navbar>

        <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">EORR 404</h1>
          <p className="py-6">
          <h1 className='text-2xl '>Page not Found</h1>
          
          <p>please check the url</p>
           
          </p>
          <NavLink to='/'><button className='btn bg-blue-600 text-white'>Back to Home</button></NavLink>
     
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default ErrorPage
