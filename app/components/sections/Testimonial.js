'use client'

import { reviews } from "@/app/constants";
import { useState } from "react"
import Cards from "../inputs/Cards";
import Button from "../inputs/Button";

const Testimonial = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='flex flex-col gap-5 md:gap-10 items-center max-md:pb-10 py-12 mt-5 md:mt-20 md:mb-20 max-md:px-4'>
      <h2 className='text-darkblue text-3xl md:text-4xl font-bold mb-5 md:mb-16'>What they’ve said</h2>
      <div className='flex gap-8 pt-9 overflow-x-auto w-full no-scrollbar'>
        {reviews.map((item) => (
          <Cards key={item.name} item={item} />
        ))}
      </div>
      <div className='flex gap-2 md:hidden max-md:mb-6'>
        {reviews.map((item, index) => (
          <div onClick={() => setActiveIndex(index)} key={item.name} className={`rounded-full shadow w-2 h-2 border border-brightred ${index === activeIndex && 'bg-brightred'}`}></div>
        ))}
      </div>
      <Button label='Get Started' />
    </div>
  )
}

export default Testimonial