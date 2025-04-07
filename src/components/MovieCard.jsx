import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ poster_Path }) => {
  return (
    <div className=' w-48 pr-4'>
      <img
        alt='Movie Poster'
        src={poster_Path ? IMG_CDN_URL + poster_Path : '/fallback-image.jpg'}
        className='w-full h-auto rounded-lg shadow-md'
      />
    </div>
  );
};

export default MovieCard;
