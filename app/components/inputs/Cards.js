import Image from 'next/image'
import React from 'react'

function Cards({ item, index }) {
  return (
    <div id={`review-${index}`} className='flex-shrink-0 pt-14 max-md:w-full w-[543px]'>
      <div className='relative pt-14 md:p-10 p-6 bg-verylightgray flex justify-center items-center flex-col gap-5 '>
        <Image priority={false} className='absolute top-[-35px]' src={item.imgURL} alt={item.name} width={70} height={70} />
        <h4 className='font-bold text-darkblue'>{item.name}</h4>
        <p className='text-darkgrayishblue text-center max-md:text-sm max-md:leading-7'>{item.feedback}</p>
      </div>
    </div>
  )
}

export default Cards