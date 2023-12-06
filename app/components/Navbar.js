import Image from 'next/image'
import React from 'react'
import Button from './inputs/Button'
import FirstView from './sections/FirstView'
import Logo from './Logo'

const Navbar = () => {
  return (
    <>
      <nav className="spacing flex justify-between items-center py-10">
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
      <section className='spacing my-20'>
        <Image src="/images/bg-tablet-pattern.svg" alt='tablet-pattern' className='absolute top-[-153px] right-[-120px] z-[-1]' width="814" height="814"/>
        <FirstView/>
      </section>
    </>
  )
}

export default Navbar