import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlices";
import gptReducer from "./gptSlice";
import configReducer from "./consfigSlice";
const appstore=configureStore({
    reducer:{
        user: userReducer,
        movies: movieReducer,
        gpt:gptReducer,
        config:configReducer,
    
    }
})
export default appstore;