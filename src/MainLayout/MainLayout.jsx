import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import { useNavigation } from "react-router";

const MainLayout = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  console.log(navigation);
  
  return (
    <div>
      <Navbar></Navbar>
      {isNavigating ?<span className="loading loading-dots loading-sm"></span>:
      <Outlet></Outlet>}

      <Footer></Footer>

     
      

    </div>
  )
}

export default MainLayout
