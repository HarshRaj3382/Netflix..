import React from 'react'

const VideoTitle = ({title,overview}) => {
 
  return (
    <div className='pt-[20%] px-12 absolute text-white bg-gradient-to-b from-black to-transparent w-full h-full'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
          <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>▶️ Play</button>
          <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg ml-4'>
            More Info
          </button>
      </div>

    </div>
  )
}

export default VideoTitle
 