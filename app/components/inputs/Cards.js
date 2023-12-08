import Image from 'next/image'
import React from 'react'

function Cards({ item }) {
  return (
    <div className='flex-shrink-0 relative pt-14 md:p-10 p-6 bg-verylightgray w-[543px] flex justify-center items-center flex-col gap-5 max-md:w-full'>
      <Image className='absolute top-[-35px]' src={item.imgURL} alt={item.name} width={70} height={70}/>
      <h4 className='font-bold text-darkblue'>{item.name}</h4>
      <p className='text-darkgrayishblue text-center max-md:text-sm max-md:leading-7'>{item.feedback}</p>
    </div>
  )
}

export default Cards