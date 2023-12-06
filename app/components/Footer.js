import Image from 'next/image'
import React from 'react'
import Logo from './Logo'
import Button from './inputs/Button'
import Input from './inputs/Input'

const Footer = () => {
  return (
    <footer className='spacing bg-verydarkblue py-10 flex justify-between'>
      <div className='flex flex-col justify-between flex-1'>
        <Logo color='#ffffff' />
        <div className='flex gap-3'>
          <Image className='cursor-pointer' src='images/icon-facebook.svg' alt='facebook-icon' width={20} height={20} />
          <Image className='cursor-pointer' src='images/icon-youtube.svg' alt='youtube-icon' width={20} height={20} />
          <Image className='cursor-pointer' src='images/icon-twitter.svg' alt='twitter-icon' width={20} height={20} />
          <Image className='cursor-pointer' src='images/icon-pinterest.svg' alt='pinterest-icon' width={20} height={20} />
          <Image className='cursor-pointer' src='images/icon-instagram.svg' alt='instagram-icon' width={20} height={20} />
        </div>
      </div>
      <div className='flex-1'>
        <ul className='flex flex-col gap-3'>
          <li className='footerlinks'>Home</li>
          <li className='footerlinks'>Pricing</li>
          <li className='footerlinks'>Products</li>
          <li className='footerlinks'>About Us</li>
        </ul>
      </div>
      <div className='flex-1'>
        <ul className='flex flex-col gap-3'>
          <li className='footerlinks'>Careers</li>
          <li className='footerlinks'>Community</li>
          <li className='footerlinks'>Privacy Policy</li>
        </ul>
      </div>
      <div className='flex flex-col justify-between flex-1'>
        <div className='flex gap-2'>
          <Input label="Updates in your inbox…"/>
          <Button label='Go'/>
        </div>
        <div className='text-gray-400 text-xs flex justify-end'>Copyright 2020. All Rights Reserved</div>
      </div>
    </footer>
  )
}

export default Footer