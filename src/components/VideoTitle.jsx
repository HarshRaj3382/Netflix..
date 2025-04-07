// import React from 'react'

// const VideoTitle = ({title,overview}) => {
 
//   return (
//     <div className='pt-[20%] px-12 absolute text-white bg-gradient-to-b from-black to-transparent w-full h-full'>
//       <h1 className='text-6xl font-bold'>{title}</h1>
//       <p className='py-6 text-lg w-1/4'>{overview}</p>
//       <div className=''>
//           <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>▶️ Play</button>
//           <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg ml-4'>
//             More Info
//           </button>
//       </div>

//     </div>
//   )
// }

// export default VideoTitle


import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-[18%] px-6 md:px-12 absolute text-white bg-gradient-to-b from-black to-transparent w-full h-full flex flex-col justify-start'>
      <h1 className='text-3xl md:text-6xl font-bold mb-2 md:mb-4'>{title}</h1>
      <p className='py-2 md:py-6 text-base md:text-lg w-full md:w-2/4 overflow-hidden text-ellipsis whitespace-normal hidden md:block'>
        {overview}
      </p>
      <div className='mt-2 md:mt-1 mb-2'>
        <button className='bg-gray-500 text-white p-3 md:p-4 px-6 md:px-12 text-lg md:text-xl bg-opacity-50 rounded-lg mr-2 md:mr-4'>
          ▶️ Play
        </button>
        <button className='bg-gray-500 text-white p-3 md:p-4 px-6 md:px-12 text-lg md:text-xl bg-opacity-50 rounded-lg'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
 