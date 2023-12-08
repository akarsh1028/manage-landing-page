import Image from 'next/image'
import React from 'react'
import Button from '../inputs/Button'

const FirstView = () => {
  return (
    <section className='my-20'>
      <div className='flex justify-between z-10 gap-5'>
        <div className='flex flex-col w-1/2 gap-8'>
          <h1 className='mt-[3.5rem] font-bold text-darkblue leading-[4rem] text-[3.3rem]'>Bring everyone together to build better products.</h1>
          <p className='w-7/12 text-darkgrayishblue'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
          <div className='w-1/2'>
            <Button label='Get Started' />
          </div>
        </div>
        <div className='relative z-10 w-1/2'>
          <Image src="/images/illustration-intro.svg" alt="illustration-intro" width="580" height="525" />
        </div>
      </div>
    </section>

  )
}

export default FirstView