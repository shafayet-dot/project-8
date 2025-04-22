import React, { useEffect, useState } from 'react'
import { getFavorites, removeFavorite } from '../utility'
import PhoneCard from './PhoneCard'
import BookCrad from './BookCrad'

const AddBooking = () => {
    
  const [displayPhones,setDisplayPhones] = useState([])

  useEffect(()=>{
    const savedPhones = getFavorites()
    console.log(savedPhones)
    
    setDisplayPhones(savedPhones)
  },[])

  const handleDelete=(id) =>{
    removeFavorite(id)
    setDisplayPhones(getFavorites())
    
   }

  return (
  

    <div>
    

    
    <BookCrad displayPhones={displayPhones} handleDelete={handleDelete}></BookCrad>
    
    </div>
      


   
  )
}

export default AddBooking


