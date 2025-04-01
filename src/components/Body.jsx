// import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux';
// import Login from './Login'
// import Browse  from './Browse'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { onAuthStateChanged } from 'firebase/auth'
// import { addUser, removeUser } from '../utils/userSlice';
// import { auth } from '../utils/firebase'
// const Body = () => {
//      const dispatch=useDispatch();
  

//     const appRouter =createBrowserRouter([
//         {
//             path:'/',
//             element:<Login/>
//         },
//         {
//             path:'/browse',
//             element:<Browse/>
//         }
//     ]);

//     useEffect(() => {
//         onAuthStateChanged(auth,(user)=>{
//           if(user){
//             const {uid,email,displayName}=user;
//             dispatch(addUser({uid:uid,email:email,displayName:displayName }));
            
//           }
//           else{
//             //User is signed out
//             dispatch(removeUser());
            
//           }
//         })
//     }
//     , []);
        


//   return (
//     <div>
//       <RouterProvider router={appRouter} />
//     </div>
//   )
// }

// export default Body


// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { addUser, removeUser } from "../utils/userSlice";
// import Login from "./Login";
// import Browse from "./Browse";
// import ProtectedRoute from "./ProtectedRoute";

// const Body = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user); // Get user from Redux store

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const { uid, email, displayName } = user;
//         dispatch(addUser({ uid, email, displayName }));
//       } else {
//         dispatch(removeUser());
//       }
//     });

//     return () => unsubscribe();
//   }, [dispatch]);

//   const appRouter = createBrowserRouter([
//     { path: "/", element: user ? <Navigate to="/browse" /> : <Login /> }, // ✅ Redirect after login
//     {
//       path: "/browse",
//       element: <ProtectedRoute> <Browse /> </ProtectedRoute>, // ✅ Protected route
//     },
//   ]);

//   return <RouterProvider router={appRouter} />;
// };

// export default Body;


import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
