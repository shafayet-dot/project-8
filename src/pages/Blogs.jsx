import React from 'react'
import { useLoaderData } from 'react-router'
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  const faqs = useLoaderData()
  console.log(faqs);
  
  return (
    
    <div>
      

    <div>
    {
      faqs.map((faq)=><BlogCard faq={faq}></BlogCard>)
    }
    </div>
    </div>
  )
}

export default Blogs
