import React from 'react'

const Sidebar = () => {
  return (
    <div className='sidebarshadow absolute top-24 w-[90%] left-1/2 -translate-x-1/2 z-50 bg-white'>
      <ul className='flex flex-col items-center gap-5 p-10'>
        <li className='greyText font-black text-base'>Pricing</li>
        <li className='greyText font-black text-base'>Product</li>
        <li className='greyText font-black text-base'>About Us</li>
        <li className='greyText font-black text-base'>Careers</li>
        <li className='greyText font-black text-base'>Community</li>
      </ul>
    </div>
  )
}

export default Sidebar