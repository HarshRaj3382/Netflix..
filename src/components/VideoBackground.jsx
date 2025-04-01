

import React, { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/constants';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId }) => {
 
const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);  // Custom hook to fetch the trailer

  if (!trailerVideo) {
    return <p>Loading trailer...</p>;  // Show loading state if trailer isn't available yet
  }
  return (
    <div className='w-screen'>
      <iframe
  className='w-full h-[500px] md:h-[700px] lg:h-[800px]'
  src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`}  // Autoplay added in the URL
  title="Movie Trailer"
  frameBorder="0"

  allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

    </div>
  );
};

export default VideoBackground;

