import React from 'react'
import CountUp from 'react-countup';
const Coumnt = () => {
  return (
    <div>

    <div className='mt-10'>
    <h1 className='text-4xl'>We Provide Best Law Services</h1>
    <p>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
    </div>


    <div className='flex gap-2 mt-10'>

    <div className="card card-dash bg-base-200 w-96 border-2">
    <div className="card-body bg-base-200 ">
        <img className='h-20 w-20 justify-center items-center text-center ml-20' src="https://i.ibb.co.com/rRdrbM0X/success-doctor.png" alt="" />
        <p className='text-2xl'><CountUp end={'199'} duration={5}/>,</p>
        <p className='text-2xl'>Total Lawyer</p>
      <div className="card-actions justify-end">
 
      </div>
    </div>
  </div>

  <div className="card card-dash bg-base-200 w-96 border-2">
  <div className="card-body bg-base-200 ">
      <img className='h-20 w-20 justify-center items-center text-center ml-20' src="https://i.ibb.co.com/QvyjMcFP/success-review.png" alt="" />
      <h1 className='text-2xl'><CountUp end={'467'} duration={10}/>,</h1>
      <h1 className='text-2xl'>Total Reviews</h1>
  
  </div>
</div>

<div className="card card-dash bg-base-200 w-96 border-2">
<div className="card-body bg-base-200 ">
    <img className='h-20 w-20 justify-center items-center text-center ml-20' src="https://i.ibb.co.com/wZzDNKg1/logo.png" alt="" />
    <p className='text-2xl'><CountUp end={`1900`} duration={10}/>,</p>
    <p className='text-2xl'>Total Cases</p>
  <div className="card-actions justify-end">

  </div>
</div>
</div>

<div className="card card-dash bg-base-200 w-96 border-2">
<div className="card-body bg-base-200 ">
    <img className='h-20 w-20 justify-center items-center text-center ml-20' src="https://i.ibb.co.com/rfzSgZ0F/success-staffs.png" alt="" />
    <p className='text-2xl'><CountUp end={`300`} duration={10}/>,</p>
    <p className='text-2xl'>Total Stuffs</p>
  <div className="card-actions justify-end">

  </div>
</div>
</div>

  


    </div>

 




      
    </div>
  )
}

export default Coumnt
