'use client'

import { reviews } from "@/app/constants";
import { useState } from "react"
import Cards from "../inputs/Cards";
import Button from "../inputs/Button";

const Testimonial = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex flex-col gap-5 md:gap-10 items-center max-md:pb-10 py-12 mt-5 md:mt-20 md:mb-20 max-md:px-4'>
      <h2 className='text-darkblue text-3xl md:text-4xl font-bold md:mb-16'>What they’ve said</h2>
      <div className='flex gap-8 overflow-x-auto w-full no-scrollbar scroll-smooth'>
        {reviews.map((item, index) => (
          <Cards key={item.name} item={item} index={index}/>
        ))}
      </div>
      <div className='flex gap-2 md:hidden max-md:mb-6'>
        {reviews.map((item, index) => (
          <a className="scroll-smooth" key={item.name} href={`#review-${index}`} onClick={() => setActiveIndex(index)}><div className={`rounded-full shadow w-2 h-2 border border-brightred ${index === activeIndex && 'bg-brightred'}`}></div></a>
        ))}
      </div>
      <Button label='Get Started' />
    </div>
  )
}

export default Testimonial