import React from 'react'
import './LoadingModule.css'

import loading from '../../../img/Spinner-loading.svg'

const Loading = () => {
  return (
    <div className='container_loader'>
      <img src={loading} alt="Loading" className='loader' />
    </div>
  )
}

export default Loading