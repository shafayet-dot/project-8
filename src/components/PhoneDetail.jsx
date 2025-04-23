import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router'
import { addFavourite } from '../utility'

const PhoneDetail = () => {
    const data = useLoaderData()
    const {id} = useParams()
    const singlephone = data.find(phone=>phone.id===parseInt(id))
    console.log(singlephone);

    const {image,name,Experience,expart,License,price,work} = singlephone

    const handleFavourite = () =>{
      addFavourite({name,price,id,expart})
    }
  return (
    <div>

    <div className="bg-gray-200 rounded-lg p-20 mt-5">
     <div className="flex justify-center">
  <div>
   <h1 className="font-bold text-2xl text-center">Lawyer’s Profile Details</h1>
   <p className="text-center mt-4">This is a detail page of the loywer you are click check and if you liked book an appoinment.</p>
  </div>
     </div>
    </div>

   



    

    <div class="flex space-x-5 mt-10">
    <div class="w-48 h-52 bg-gray-500">
    <img src={image} alt="" />
    </div>

    <div class="space-y-3">

         <div>
             <button class="bg-[#176AE51A] px-2 py-1 rounded-full text-[#176AE5]">{}{Experience}+Experience</button>
             <h1 class="text-3xl font-semibold">{name}</h1>
         </div>

          <div class="flex space-x-4 text-gray-500">
             <p>{expart}</p>
             <p><span class="border border-gray-500 rounded-full p-1">R</span>License No:{License}</p>
          </div>

          <div class="flex space-x-4 text-[#FFA000] items-center">
             <h2 class="text-black font-medium text-xl text-gray-700">Availability</h2>
             <div className='mr-2 space-x-2'>
             {
               work.map(w=><button class="bg-orange-50 px-2 py-1 rounded-full border">{w}</button>)
             }
             </div>
            
          </div>

          <div class="flex space-x-4">
             <h1 class="text-gray-700">Consultation Fee:</h1>
             <h2 class="text-[#0EA106] font-medium">Taka :{price}</h2>

             </div>
             <Link to='/my_booking'>
             <button onClick={handleFavourite} className='btn bg-green-500 px-50 text-white'>Book Appointment</button>
             </Link>
    </div>
 </div>
  
   
    
    </div>
  )
}

export default PhoneDetail
