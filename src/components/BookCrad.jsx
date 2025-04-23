import React from 'react'
import { getFavorites, removeFavorite } from '../utility'
import { Link } from 'react-router';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];



const BookCrad = ({handleDelete,displayPhones}) => {
     const favorites = getFavorites()
     console.log(favorites);
     const getPath = (x, y, width, height) => (
      `M${x},${y + height}
       C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
       C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
       Z`
    );

     const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    

  return (

    <div>
   

    
    {

      favorites.length == 0 ?<h1 className=' mt-10  h-40 p-4 border border-gray-300 rounded-lg shadow-md bg-white justify-center items-center font-bold text-3xl'>No Booking Avaiable here</h1> 
      :

      <BarChart className='border-2 border-red-400'
      width={500}
      height={300}
      data={favorites}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="price" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {favorites.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    }
      {
    
        favorites.map(fav=>
        <div class="border border-gray-300 p-5 rounded-xl">
        <div class="flex justify-between">
           <div class="ml-5">
              <h4 class="text-xl font-bold">{fav.name}</h4>
        
        <p class="text-gray-500 mt-2">{fav.expart}</p>
           </div>
           <div class="mr-7">
              <p class="text-gray-500 pt-5">Appointment Fee : {fav.price}</p>
           </div>
        </div>
        <p class="border border-gray-200 border-dashed mt-2 mb-2 ml-5 mr-8"></p>
        <div>
              <div class="flex justify-center mt-6">

              <Link to={`/detail/${fav.id}`}>
              <button onClick={()=>handleDelete(fav.id)} class="text-red-500 font-medium border border-red-500 rounded-full px-[470px] py-1">Cancel Appointment</button>
               </Link>
              </div>
        </div>
      </div>
  
      )
    
    }
    



   
      
    </div>
  )
}

export default BookCrad
