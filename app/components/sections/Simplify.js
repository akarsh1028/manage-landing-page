import React from 'react'
import Button from '../inputs/Button'
import Image from 'next/image'
import SimplifyDesktop from '../Svgs/SimplifyDesktop'

const Simplify = () => {
  return (
    <section className='relative spacing bg-brightred flex justify-between py-16 items-center overflow-hidden flex-col md:flex-row max-md:gap-8'>
      <SimplifyDesktop/>
      <h2 className='text-4xl text-white font-medium md:w-5/12 max-md:text-center'>Simplify how your team works today.</h2>
      <div className='flex-1 w-1/2 h-1/2 flex justify-center md:justify-end'>
        <Button label="Get Started" white={true} />
      </div>
    </section>
  )
}

export default Simplify