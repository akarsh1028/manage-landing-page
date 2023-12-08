import { points } from '@/app/constants'
import Image from 'next/image'
import React from 'react'
import Testimonial from './Testimonial'

const SecondView = () => {
  
  return (
    <section className='widthMax overflow-hidden relative'>
      <div className='flex flex-col md:flex-row justify-between md:contentpadding md:gap-20 gap-14 relative'>
        <div className='flex-1 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center'>
          <h2 className='font-bold text-darkblue leading-[2.6rem] text-[1.8rem] mb-4 md:leading-[3.3rem] md:text-[2.3rem] max-md:px-10 max-md:text-center'>What’s different about Manage?</h2>
          <p className='text-darkgrayishblue w-11/12 md:w-8/12 max-md:text-center'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
        </div>
        <div className='flex-1 flex flex-col gap-10 max-md:pl-5'>
          {points.map((item) => (
            <div key={item.title} className='flex gap-4'>
              <div className='rounded-full bg-brightred text-white h-9 py-1.5 px-6 max-md:hidden'>{item.index}</div>
              <div className='flex flex-col gap-5'>
                <div className='max-md:text-sm font-bold text-darkblue md:pt-2 max-md:bg-verypalered max-md:flex items-center max-md:gap-3 rounded-tl-full rounded-bl-full'>
                  <div className='rounded-full bg-brightred text-white h-9 py-1.5 px-6 md:hidden'>{item.index}</div>
                  {item.title}
                </div>
                <p className='text-darkgrayishblue max-md:text-sm max-md:pr-4 max-md:leading-6'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Image priority src="/images/bg-tablet-pattern.svg" alt='tablet-pattern' className='absolute bottom-[-570px] left-[-500px] z-[-1] max-md:hidden' width="814" height="814" />
      </div>
      <Testimonial/>
    </section>
  )
}

export default SecondView