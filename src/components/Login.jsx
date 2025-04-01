
import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {googleProvider} from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const fullName = useRef(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,  // ✅ CORRECT
            photoURL: USER_AVATAR,
          })
          
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleGoogleSignIn = async () => {
            signInWithPopup(auth, googleProvider)
                .then((result) => {
                    console.log("Google Sign-In Success:", result.user);
                    
                })
                .catch((error) => {
                    setErrorMessage(error.code + " - " + error.message);
                });
        };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative w-full h-screen overflow-hidden">
                     <Header />
                 <div className="absolute inset-0">
                     <img src={BG_URL} className="w-full h-full object-cover" alt="bg-img" />
    /                <div className="absolute inset-0 "></div>
                 </div>
                 <form
                     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                bg-black/75 rounded-sm text-white z-10
                                p-6 md:p-8 lg:p-12
                                w-[90%] md:w-[400px] lg:w-[450px]
                                flex flex-col"
                     onSubmit={(e) => e.preventDefault()}
                 >
                     <h1 className="text-2xl md:text-3xl py-2 md:py-4 font-bold">
                         {isSignInForm ? "Sign In" : "Sign Up"}
                     </h1>
                     {!isSignInForm && (
                         <input
                             ref={fullName}
                             type="text"
                             placeholder="Full Name"
                             className="py-2 px-3 my-1 md:my-2 bg-[#333] rounded border-0 text-sm md:text-base"
                         />
                     )}
                     <input
                         ref={email}
                         type="text"
                         placeholder="Email or phone number"
                        className="py-2 px-3 my-1 md:my-2 bg-[#333] rounded border-0 text-sm md:text-base"
                     />
                     <input
                         ref={password}
                         type="password"
                         placeholder="Password"
                         className="py-2 px-3 my-1 md:my-2 bg-[#333] rounded border-0 text-sm md:text-base"
                     />
                     <p className="text-red-500 text-xs md:text-sm py-1">{errorMessage}</p>
                     <button
                         className="py-2.5 md:py-3 mt-2 md:mt-4 bg-[#e50914] text-white rounded font-bold hover:bg-[#c40812] cursor-pointer text-base md:text-lg"
                         onClick={handleButtonClick}
                    >
                         {isSignInForm ? "Sign In" : "Sign Up"}
                     </button>
                     <button
                         className="py-2 mt-2 md:mt-4 bg-[#333] text-white rounded hover:bg-[#555] cursor-pointer text-sm md:text-base"
                        onClick={handleGoogleSignIn}
                     >
                         Continue with Google
                     </button>
                     <div className="flex items-center justify-between py-2 md:py-4 text-[#b3b3b3] text-xs md:text-sm">
                         <div className="flex items-center">
                             <input type="checkbox" className="mr-2 accent-[#b3b3b3] w-4 h-4" />
                             <span>Remember me</span>
                         </div>
                         <a href="#" className="hover:underline text-[#b3b3b3]">Need help?</a>
                    </div>
                     <p className="py-1 md:py-2 text-[#737373] text-xs md:text-sm">
                         {isSignInForm
                             ? <span className="cursor-pointer" onClick={toggleSignInForm}>New to Netflix? <span className="text-[#fff] hover:underline">Sign up now</span>.</span>
                             : <span className="cursor-pointer" onClick={toggleSignInForm}>Already have an account? <span className="text-[#fff] hover:underline">Sign in</span>.</span>
                         }
                     </p>
                 </form>
             </div>
  );
};
export default Login;
