import React from 'react'

function Video({values}) {
 const {name,img,description}=values;
  return (
    <div className='px-2 py-1 mt-3 flex rounded-md w-100 shadow-xl'>
      <img className='h-30 w-30 rounded-md' src={img} alt="" />
      <div className='w-80 ml-4'>
        <h2 className='text-xl'>{name}</h2>
        <h1 className='text-xs mt-4'>{description}</h1>
      </div>
  
    </div>
  )
}

export default Video