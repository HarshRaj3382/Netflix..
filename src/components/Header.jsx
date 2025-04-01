

import React, { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); // Get user from Redux store

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

  return (
    <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black via-gray-5 to-transparent z-10 flex items-center justify-between">
      {/* Logo */}
      <img src={LOGO} alt="logo" className="w-50 md:w-44 cursor-pointer" />

      {/* User Profile & Sign Out (only if user is logged in) */}
      {user?.email && (
        <div className="flex flex-col items-center gap-2 bg-gray-800 p-3 rounded-lg shadow-lg">
          <img
            src={user.photoURL || "https://via.placeholder.com/50"}
            alt="user"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <p className="text-white text-sm font-medium">{user.displayName || "User"}</p>
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
