import Image from 'next/image'
import React from 'react'
import Button from '../inputs/Button'

const FirstView = () => {
  return (
    <section className='max-md:mt-5 max-md:mb-32 md:my-16'>
      <div className='flex flex-col-reverse justify-between z-10 md:gap-5 md:flex-row max-md:items-center'>
        <div className='flex flex-col gap-4 md:w-1/2 md:gap-8 max-md:items-center'>
          <h1 className='font-bold text-darkblue leading-[2.9rem] text-[2.2rem] max-md:text-center md:text-[3.3rem] md:mt-[3.5rem] sm:leading-[4rem] sm:text-[3.4rem]'>Bring everyone together to build better products.</h1>
          <p className='text-darkgrayishblue md:w-7/12 max-md:text-center max-md:leading-7'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
          <div className='md:w-1/2 max-md:mt-8'>
            <Button label='Get Started' />
          </div>
        </div>
        <div className='relative z-10 md:w-1/2'>
          <Image priority src="/images/illustration-intro.svg" alt="illustration-intro" width="580" height="525" />
        </div>
      </div>
    </section>

  )
}

export default FirstView