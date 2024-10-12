import React from 'react'

const layout = ({children}) => {
  return (
    <div>
      <div className='flex flex-row justify-between items-center'>
        <div className='button rounded-full'></div>
        <div></div>
        <div></div>
      </div>
      {children}
    </div>
  )
}

export default layout