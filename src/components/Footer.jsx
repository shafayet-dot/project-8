import React from 'react'

const Footer = () => {
  return (
    <div>
    

    <footer className="footer sm:footer-horizontal footer-center bg-black text-base-content p-4 mt-10">

    <div className='flex justify-center'>

    <img src="https://i.ibb.co.com/TqtB3LZ8/logo.png" alt="" />
    <p className='text-2xl text-white'>Low.bd</p>
    </div>

    <div className='flex justify-center gap-2 text-white'>
    <p>Home</p>
    <p>My Booking</p>
    <p>Blogs</p>
    <p>Contact</p>
    </div>



    <div className='flex justify-center gap-2'>
    <a href="https://www.facebook.com/shafayet.shad.3" target='_blank'><img className='w-10' src="https://i.ibb.co.com/27HvFFm4/Facebook.png" alt="" /></a>

  
   <a href="https://www.instagram.com/fahimfahim9798/" target='_blank' ><img className='w-10 rounded-full' src="https://i.ibb.co.com/dJQLxhDf/instagram.jpg" alt="" /></a>

    <a href="https://www.youtube.com/@CodeWithHarry" target='_blank'><img className='w-10 rounded-full' src="https://i.ibb.co.com/KcYy71RQ/youtube.png" alt=""/></a>
    
    </div>

  

  
</footer>
    
    </div>
  )
}

export default Footer