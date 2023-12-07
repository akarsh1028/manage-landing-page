'use client'

import React, { useState } from 'react'
import Button from './Button'

const Input = () => {

  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState('');

  const checkEmail = () => {
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    if(!pattern.test(email)){
      setShowError(true);
      return;
    }
    setShowError(false);
  }

  return (
    <div className='flex gap-2 relative'>
      <input value={email} onChange={(e) => setEmail(e.target.value)} className={`rounded-full px-5 placeholder:text-gray-400 text-sm outline-none ${showError && 'text-brightred border border-brightred'}`} placeholder="Updates in your inbox…" type="email" />
      {showError && (<span className='absolute text-[0.7rem] text-red-500 font-extralight bottom-[-22px] left-[22px]'>Please insert a valid email</span>)}
      <Button label='Go' onClick={() => checkEmail()} />
    </div>
  )
}

export default Input