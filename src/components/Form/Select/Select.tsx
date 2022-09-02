import React from 'react'
import './SelectModule.css'

const Select = ({text, name, options, handleOnChange, value}: any) => {
  return (
    <div className={`form_control`}>
      <label htmlFor={name}>{text}:</label>
      
      <select 
        name={name} 
        id={name} 
        onChange={handleOnChange} 
        value={value || ''}    
      >

        <option>Selecione uma opção</option>

        {options.map((option:any) => (
          <option 
            value={option.id} 
            key={option.id}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select