

import React, { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/consfigSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); // Get user from Redux store
  const showGptSearchView = useSelector((store) => store.gpt.showGptSearchView); // Get GPT search view state from Redux store



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL  

         }));
        navigate("/browse"); // Redirect after login
      } else {
        dispatch(removeUser());
        navigate("/"); // Redirect to login if signed out
      } 
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign Out Error:", error.message);
    }
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView()); // Dispatch action to show GPT search
  }


  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    // Dispatch action to change language in Redux store or handle it as needed
    dispatch(changeLanguage(selectedLanguage));
  }

  return (
    <div className="absolute w-screen px-5 py-2 bg-gradient-to-b from-black via-gray-5 to-transparent z-10 flex items-center justify-between z-20">
      {/* Logo */}
      <img src={LOGO} alt="logo" className="w-50 md:w-44 cursor-pointer ml-15" />
  
      {/* User Profile & Sign Out (only if user is logged in) */}
      {user?.email && (
        <div className="flex items-center gap-4">
         {showGptSearchView && <select
           className="bg-gray-800 text-white p-2 rounded-lg shadow-md mr-8"
           onClick={handleLanguageChange}
           
           >
            {SUPPORTED_LANGUAGES.map((language) => (
              <option key={language.code} value={language.code}>  
                {language.name}
              </option>
            ))
            }
            
          </select>}
        <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 mr-8"
            onClick={handleGptSearchClick}
          >
            {showGptSearchView ?"Home" : "GPT Search"}
          </button>
          
        <div className="flex flex-col items-center gap-2 bg-gray-800 p-1 rounded-lg shadow-lg">
         
          {/* <img
            src={user.photoURL || "https://via.placeholder.com/50"}
            alt="user"
            className="w-10 h-10 rounded-full border-2 border-white"
          /> */}
          <p className="text-white text-sm font-medium">{user.displayName || "User"}</p>
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default Header;
