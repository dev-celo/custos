import React from 'react'
import { Link } from 'react-router-dom'
import './LinkButtonModule.css'

const LinkButton = ({to, text}: any) => {
  return (
    <>
      <Link className={`btn`} to={to}>
        {text}
      </Link>
    </>
  )
}

export default LinkButton