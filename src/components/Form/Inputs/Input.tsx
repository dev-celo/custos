import React from 'react'
import './InputModule.css'

export const Input = ({type, text, name, placeholder, handleOnChange, value}: any) => {
  return (
    <div className='form_control'>
      <label htmlFor={name}>{text}:</label>
      <input 
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={handleOnChange}
      value={value} />
    </div>
  )
}
