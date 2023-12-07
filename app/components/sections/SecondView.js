import { points } from '@/app/constants'
import Image from 'next/image'
import React from 'react'

const SecondView = () => {
  return (
    <section className='spacing flex justify-between gap-32 relative'>
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
    </section>
  )
}

export default SecondView