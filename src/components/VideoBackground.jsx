

import React, { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/constants';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
 
const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);  
  if (!trailerVideo) {
    return <p>Loading trailer...</p>; 
  }
  return (
    <div className='w-screen'>
    <iframe
    className='w-full h-[500px] md:h-[700px] lg:h-[800px]'
    src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}  
    title="Movie Trailer"
    frameBorder="0"

    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    ></iframe>

    </div>
  );
};

export default VideoBackground;

