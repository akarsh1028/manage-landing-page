import React from 'react'
import Button from '../inputs/Button'
import { reviews } from '@/app/constants'
import Cards from '../inputs/Cards'

const Testimonial = () => {
  return (
    <section className='testimonial spacing flex flex-col gap-10 items-center py-12 my-28'>
      <h2 className='text-darkblue text-4xl font-bold mb-16'>What they’ve said</h2>
      <div className='flex gap-8 pt-9 overflow-x-auto w-full no-scrollbar'>
        { reviews.map((item) => (
          <Cards key={item.name} item={item}/>
        ) ) }
      </div>
      <Button label='Get Started' />
    </section>
  )
}

export default Testimonial