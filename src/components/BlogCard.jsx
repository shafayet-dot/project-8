import React from 'react'

const BlogCard = ({faq}) => {
  return (
    <div className='mt-10'>
    <div>
    <div class="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div class="collapse-title font-semibold">{faq.question}</div>
    <div class="collapse-content text-sm">{faq.answer}.</div>
  </div>
    
    </div>
    </div>
  )
}

export default BlogCard
