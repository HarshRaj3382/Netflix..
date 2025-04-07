import React, { use, useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryConatiner from './SecondaryConatiner'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
const showGptSearchView=useSelector((store)=>store.gpt.showGptSearchView);

useNowPlayingMovies();



  return (
    <div>
      <Header />
      {
        showGptSearchView ? (<GptSearch />
        ):(<>
      <MainContainer />
      <SecondaryConatiner />
        </>)
      }
      
    
      
      
     
    </div>
  )
}

export default Browse
