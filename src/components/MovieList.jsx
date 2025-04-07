
// import React from 'react';
// import  MovieCard  from './MovieCard';

// const MovieList = ({ title, movies }) => {
//   console.log(movies);

//   return (
//     <div>
//       <h1>{title}</h1>
//       <div className='flex overflow-x-scroll'>
//         {movies.length === 0 && <p>No movies available</p>}
//         {movies.length > 0 && movies.map((movie) => (
//           <MovieCard key={movie.id} poster_Path={movie.poster_path} />
//         ))}
       
      
//       </div>
//     </div>
//   );
// };

// export default MovieList;

// import React from 'react';
// import MovieCard from './MovieCard';

// const MovieList = ({ title, movies }) => {
//   console.log(movies);

//   // Ensure movies is an array before accessing its length
//   if (!movies || !Array.isArray(movies)) {
//     return <p>Loading movies...</p>;
//   }

//   return (
//     <div className="px-6 no-scrollbar">
//       <h1 className="text-3xl py-4">{title}</h1>
//       <div className="flex   ">
//         <div className="flex gap-4">
//           {movies.map((movie) => (   
//             <MovieCard key={movie.id} poster_Path={movie.poster_path} />
//           ))}
//         </div>
//       </div>
//     </div>


//   );
// };

// export default MovieList;



import React, { useRef } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  const movieListRef = useRef(null);

  const scrollLeft = () => {
    movieListRef.current.scrollLeft -= 300; // Adjust scroll amount as needed
  };

  const scrollRight = () => {
    movieListRef.current.scrollLeft += 300; // Adjust scroll amount as needed
  };

  if (!movies || !Array.isArray(movies)) {
    return <p>Loading movies...</p>;
  }

  return (
    <div className="relative"> 
      <h1 className="text-3xl font-semibold mb-4 text-white absolute top-0 left-4 ml-15 pb-5 ">{title}</h1>

      <div className="flex items-center">
        <button 
          onClick={scrollLeft} 
          className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
        >
          &lt; {/* Left arrow */}
        </button>

        <div 
          ref={movieListRef} 
          className="overflow-x-auto whitespace-nowrap scroll-smooth py-8 no-scrollbar" 
        >
          {movies.map((movie) => (
            <div 
              key={movie.id} 
              className="inline-block w-48 mr-4 rounded-3xl overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              <MovieCard poster_Path={movie.poster_path} />
            </div>
          ))}
        </div>

        <button 
          onClick={scrollRight} 
          className="bg-gray-800 text-white px-4 py-2 rounded-r-md focus:outline-none"
        >
          &gt; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export default MovieList;

