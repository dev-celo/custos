import React from 'react'
import './ContainerModule.css'

export const Container = (props: any) => {
  return (
    <div className={`container ${props.customClass}`}>
      {props.children}
    </div>
  )
}
