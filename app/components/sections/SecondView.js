import { points, reviews } from '@/app/constants'
import Image from 'next/image'
import React from 'react'
import Cards from '../inputs/Cards'
import Button from '../inputs/Button'

const SecondView = () => {
  return (
    <section className='max-w-[1440px] m-auto overflow-hidden relative'>
      <div className='flex justify-between px-[120px] gap-32 relative'>
        <div className='flex-1'>
          <h2 className='font-bold text-darkblue leading-[3.3rem] text-[2.8rem] mb-4'>What’s different about Manage?</h2>
          <p className='text-darkgrayishblue w-8/12'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
        </div>
        <div className='flex-1 flex flex-col gap-10'>
          {points.map((item) => (
            <div key={item.title} className='flex gap-6'>
              <div className='rounded-full bg-brightred text-white h-10 py-2 px-6'>{item.index}</div>
              <div className='flex flex-col gap-5'>
                <h5 className='font-bold text-darkblue pt-2'>{item.title}</h5>
                <p className='text-darkgrayishblue'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Image src="/images/bg-tablet-pattern.svg" alt='tablet-pattern' className='absolute bottom-[-570px] left-[-500px] z-[-1]' width="814" height="814" />
      </div>
      <div className='flex flex-col gap-10 items-center py-12 my-20'>
        <h2 className='text-darkblue text-4xl font-bold mb-16'>What they’ve said</h2>
        <div className='flex gap-8 pt-9 overflow-x-auto w-full no-scrollbar'>
          {reviews.map((item) => (
            <Cards key={item.name} item={item} />
          ))}
        </div>
        <Button label='Get Started' />
      </div>
    </section>
  )
}

export default SecondView