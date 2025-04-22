import React from 'react'
import { Link } from 'react-router'

const PhoneCard = ({phone}) => {
    const {name,image,price,expart,License, id,Experience} = phone || {}
  return (
    <div>

     <div class="flex space-x-5 mt-10">
        <div class="w-48 h-52 bg-gray-500">
        <img src={image} alt="" />
        
    
        </div>
    
        <div class="space-y-3">
             <div>
                 <button class="bg-[#176AE51A] px-2 py-1 rounded-full text-[#176AE5]">{Experience}+Experience</button>
                 <h1 class="text-3xl font-semibold">{name}</h1>
             </div>
    
              <div class="flex space-x-4 text-gray-500">
                 <p className='text-2xl'>{expart} Lowyar</p>
                 
              </div>
    
              <div class="flex space-x-4 text-[#FFA000] items-center">

            
           
              </div>
    
              <div class="flex space-x-4">
                 <h1 class="text-gray-700">Consultation Fee:</h1>
                 <h2 class="text-[#0EA106] font-medium">Taka :{price}</h2>
    
                 </div>
                 <Link to={`/detail/${id}`}>
                 <button className='btn bg-green-500 text-white px-10'>View details</button>
                 </Link>
        </div>
     </div>

 
    
    </div>
  )
}

export default PhoneCard
