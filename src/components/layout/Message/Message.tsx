import { useState, useEffect } from 'react'

import React from 'react'
import './MessageModule.css'

const Message = ({type, message}: any) => {

  const[visible, setVisible] = useState(false)

  useEffect(() => {
    if(!message) {
      setVisible(false)
      return
    }

    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [message])


  return (
    <>
    {
      visible && (
        <div className={`message ${type}`}>
          {message}
        </div>
      )
    }
    </>
  )
}

export default Message