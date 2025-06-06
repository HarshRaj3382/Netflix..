// import  { useEffect } from 'react'
// import { API_OPTIONS } from '../utils/constants'
// import { useDispatch, useSelector } from 'react-redux'
// import {addNowplayingMovies} from '../utils/moviesSlices'

// const useNowPlayingMovies = () => {
//     const dispatch=useDispatch();

//     const nowPlayingMovies=useSelector(
//         (store)=>store.movies?.nowPlayingMovies
//     )

//     const getNowPlayingMovies= async () => {
//       const data=await fetch(
//         'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
//         API_OPTIONS
//       );
//       const json=await data.json();
//       console.log(json.results);
//       dispatch(addNowplayingMovies(json.results));
//     };
  
//     useEffect(() => {
//     !nowPlayingMovies &&  getNowPlayingMovies();
//     }, []); 
// }


// export default useNowPlayingMovies;



import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowplayingMovies } from '../utils/moviesSlices';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);

    const getNowPlayingMovies = async () => {
        try {
            const response = await fetch(
                'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
                API_OPTIONS
            );
            const json = await response.json();
            // console.log("Fetched Movies: ", json.results);
            dispatch(addNowplayingMovies(json.results));
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    useEffect(() => {
        if (!nowPlayingMovies) getNowPlayingMovies();
    }, [nowPlayingMovies]); 
};

export default useNowPlayingMovies;

