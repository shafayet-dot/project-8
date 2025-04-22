import React, { useEffect, useState } from 'react'
import PhoneCard from './PhoneCard'

const PhoneContainer = ({phones}) => {
    const [displayPhones,setDisplayPhones] = useState([])
    const [showall,setShowAll] = useState(false)

    useEffect(()=>{
        if(showall){
            setDisplayPhones(phones)
        }
        else{

            setDisplayPhones(phones.slice(0,6))
        }
    },[phones,showall])

  return (
    <div>

    <div>
    <h1 className='text-3xl mt-10'>Our Best Lawyers</h1>
    <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
    </div>
   

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-8'> 
    {
        displayPhones.map(phone=><PhoneCard key={phone.id} phone={phone}></PhoneCard>)
    }
    </div>
    <button onClick={()=>setShowAll(prv => !prv)} className='btn bg-green-500 text-white rounded-full'>{showall?'Show less':"show all"}</button>

      
    </div>
  )
}

export default PhoneContainer
