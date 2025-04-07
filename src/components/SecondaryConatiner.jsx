import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const SecondaryConatiner = () => {
 
 const movies = useSelector((store) => store.movies);




  return (
  //   <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white px-8 py-6">
  //   <div className="space-y-12">
  //     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
  //     <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
  //     <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
  //     <MovieList title={"Best Movies"} movies={movies.nowPlayingMovies} />
  //     <MovieList title={"Most Searched"} movies={movies.nowPlayingMovies} />
  //     <MovieList title={"Action"} movies={movies.nowPlayingMovies} />
  //   </div>
  // </div>

    movies.nowPlayingMovies && (
      <div className=' bg-black'>
        <div className='-mt-52 pl-6 relative z-20'>
        <MovieList  movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Best Movies"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Most Searched"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Action"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )


  )
}

export default SecondaryConatiner
