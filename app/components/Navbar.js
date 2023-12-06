import React from 'react'
import Button from './inputs/Button'
import Logo from './Svgs/Logo'

const Navbar = () => {
  return (
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
  )
}

export default Navbar