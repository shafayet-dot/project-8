import React, { useState } from 'react'
import Banner from '../components/Banner'
import Coumnt from '../components/Coumnt'
import { useLoaderData } from 'react-router'
import PhoneContainer from '../components/PhoneContainer'

const Home = () => {
  const data = useLoaderData()
  console.log(data);
  
  return (
    <div>
    <Banner></Banner>
    <PhoneContainer phones={data}></PhoneContainer>
    <Coumnt></Coumnt>
    </div>
  )
}

export default Home
