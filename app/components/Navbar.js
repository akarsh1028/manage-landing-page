'use client'

import React, { useState } from 'react'
import Button from './inputs/Button'
import Logo from './Svgs/Logo'
import FirstView from './sections/FirstView'
import Image from 'next/image'
import Sidebar from './Sidebar'

const Navbar = () => {

  const [sidebarStatus, setSidebarStatus] = useState(false);

  const sidebarBtnClick = () => {

    if(sidebarStatus){
      document.body.style.overflow = "auto";
    }else {
      document.body.style.overflow = "hidden";
    }

    setSidebarStatus(!sidebarStatus);

  }

  return (
    <div className='spacing relative overflow-hidden'>
      <Image priority src="/images/bg-tablet-pattern.svg" alt='tablet-pattern' className='absolute top-[-50px] right-[-70px] md:top-[-160px] md:right-[-160px] z-[-1]' width="814" height="814" />
      <nav className="flex justify-between items-center pb-5 pt-14 max-md:hidden">
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

      <nav className="flex justify-between items-center pb-5 pt-10 md:hidden">
        <Logo color="#242D52"/>
        <div onClick={() => sidebarBtnClick()}>
          {sidebarStatus ? 
            <Image priority src="/images/icon-close.svg" alt='hamburger' width={25} height={18}/>
          :
            <Image priority src="/images/icon-hamburger.svg" alt='hamburger' width={25} height={18}/>
          }
        </div>
      </nav>

      {sidebarStatus && (<Sidebar/>) }
      <FirstView/>

      <Image priority src="/images/bg-tablet-pattern.svg" alt='tablet-pattern' className='absolute bottom-0 right-[-210px] md:hidden z-[-1]' width="814" height="814" />
    </div>
  )
}

export default Navbar