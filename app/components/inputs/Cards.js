import Image from 'next/image'
import React from 'react'

function Cards({ item }) {
  return (
    <div className='relative pt-14 p-10 bg-verylightgray w-[543px] flex justify-center items-center flex-col gap-5'>
      <Image className='absolute top-[-35px]' src={item.imgURL} alt={item.name} width={70} height={70}/>
      <h4>{item.name}</h4>
      <p className='text-darkgrayishblue text-center'>{item.feedback}</p>
    </div>
  )
}

export default Cards