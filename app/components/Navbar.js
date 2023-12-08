import React from 'react'
import Button from './inputs/Button'
import Logo from './Svgs/Logo'
import FirstView from './sections/FirstView'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='spacing relative overflow-hidden'>
      <Image src="/images/bg-tablet-pattern.svg" alt='tablet-pattern' className='absolute top-[-160px] right-[-160px] z-[-1]' width="814" height="814" />
      <nav className="flex justify-between items-center py-10">
        <Logo color="#242D52"/>
        <ul className='flex items-center gap-8'>
          <li className='greyText'>Pricing</li>
          <li className='greyText'>Product</li>
          <li className='greyText'>About Us</li>
          <li className='greyText'>Careers</li>
          <li className='greyText'>Community</li>
        </ul>
        <Button label='Get Started' />
      </nav>
      <FirstView/>
    </div>
  )
}

export default Navbar