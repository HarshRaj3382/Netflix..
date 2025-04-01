// import { createSlice } from "@reduxjs/toolkit";

// const movieSlice = createSlice({
//   name: "movies",
//   initialState: {
//     nowplayingMovies: null,
//   },
//   reducers: {
//     addNowplayingMovies: (state, action) => {
//       state.nowplayingMovies = action.payload;  // Fixed typo
//     },
//   },
// });

// export const { addNowplayingMovies } = movieSlice.actions;  // Fixed export
// export default movieSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo:null,  // Fixed typo (was nowplayingMovies)
  },
  reducers: {
    addNowplayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;  // Fixed typo
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowplayingMovies,addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;

