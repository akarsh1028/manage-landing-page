import React from 'react'

const Input = ({label}) => {
  return (
    <input className='rounded-full px-5 placeholder:text-gray-400 text-xs' placeholder={label} type='text'/>
  )
}

export default Input