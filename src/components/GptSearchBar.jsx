import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langKey=useSelector((store)=>store.config.lang);
  return (
    <div className='pt-[20%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
            
            className="p-4 m-4 col-span-6 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <button
             type="submit"
              className="col-span-6 bg-blue-500 text-white p-4 m-4 rounded-lg hover:bg-blue-600 transition duration-300">
               {lang[langKey].search}
              </button>
        </form>
    </div>
  )
}

export default GptSearchBar
