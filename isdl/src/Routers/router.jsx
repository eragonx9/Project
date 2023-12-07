import {
  createBrowserRouter,
  RouterProvider,Route, Routes
} from "react-router-dom";
import React,{useState,useEffect} from 'react';

import Signup from "../Components/Signup/Signup";
import App from "../App";
import Tech from "../Domain/Tech";
import Cult from "../Domain/Cult";
import Sport from "../Domain/Sport";
import Quizzinga from "../Domain/Tech/Quizzinga";
import Cipher from "../Domain/Tech/Cipher";
import Debsoc from "../Domain/Tech/Debsoc";
import Cybros from "../Domain/Tech/Cybros";
import Phoenix from "../Domain/Tech/Phoenix";
import Astronomy from "../Domain/Tech/Astronomy";
import LC from "../Domain/Cult/LC";
import Capriccio from "../Domain/Cult/Capriccio";
import Insignia from "../Domain/Cult/Insignia";
import Imagination from "../Domain/Cult/Imagination";
import Rendition from "../Domain/Cult/Rendition";
import Mediacell from "../Domain/Cult/Mediacell";
import Aaveg from "../Domain/Cult/Aaveg";
import Eminence from "../Domain/Cult/Eminence";
import Cricket from "../Domain/Sport/Cricket";
import Football from "../Domain/Sport/Football";
import Kabaddi from "../Domain/Sport/Kabaddi";
import Badminton from "../Domain/Sport/Badminton";
import Login from "../Components/Login/Login";
import Clubrec from "../Components/ClubRecruitment/Clubrec";
import Requisition from "../Components/Requisition/Requisition";
import { auth } from "../firebase"; // Import your authentication object
import VenueBooking from "../Components/VenueBooking/VenueBooking";

// Helper function to check if the user is authenticated
const isAuthenticated = () => {
  const user = auth.currentUser;
  return !!user;
};

// Custom Route component to check authentication before rendering a route
const AuthenticatedRoute = ({ element }) => {
  if (!isAuthenticated()) {
    // Redirect unauthenticated users to the login page
    window.location.replace("/");
    return null;
  }

  return <React.Fragment>{element}</React.Fragment>;;
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/login/*",
    element:<AuthenticatedRoute element={<App />} />,
  },
  {
    path: "/login/venuebook",
    element:<AuthenticatedRoute element={<VenueBooking />} />,
  },
  {
    path: "/tech",
    element: <AuthenticatedRoute element={<Tech />} />,
  },
      {
        path: "/tech/quizzinga",
        element: <AuthenticatedRoute element={<Quizzinga/>} />,
      },
      {
        path: "/tech/debsoc",
        element: <AuthenticatedRoute element={<Debsoc/>} />,
      },
      {
        path: "/tech/Cipher",
        element: <AuthenticatedRoute element={<Cipher/>} />,
      },
      {
        path: "/tech/Cybros",
        element: <AuthenticatedRoute element={<Cybros/>} />,
      },
      {
        path: "/tech/phoenix",
        element: <AuthenticatedRoute element={<Phoenix/>} />,
      },
      {
        path: "/tech/astronomy",
        element: <AuthenticatedRoute element={<Astronomy/>} />,
      },
    


  {
    path: "/cult",
    element: <AuthenticatedRoute element={<Cult/>} />,
  },
    {
      path:"/cult/lc",
      element:<AuthenticatedRoute element={<LC/>} />,
    },
    {
      path: "/cult/capriccio",
      element: <AuthenticatedRoute element={<Capriccio/>} />,
    },
    {
      path: "/cult/insignia",
      element: <AuthenticatedRoute element={<Insignia/>} />,
    },
    {
      path: "/cult/imagination",
      element: <AuthenticatedRoute element={<Imagination/>} />,
    },
    {
      path: "/cult/rendition",
      element: <AuthenticatedRoute element={<Rendition/>} />,
    },
    {
      path: "/cult/mediacell",
      element: <AuthenticatedRoute element={<Mediacell/>} />,
    },
    {
      path: "/cult/aaveg",
      element: <AuthenticatedRoute element={<Aaveg/>} />,
    },
    {
      path: "/cult/eminence",
      element:<AuthenticatedRoute element={<Eminence/>} />,
    },
  
    
  {
    path: "/sport",
    element: <AuthenticatedRoute element={<Sport/>} />,
  },
      {
        path: "/sport/badminton",
        element: <AuthenticatedRoute element={<Badminton/>} />,
      },
      {
        path: "/sport/cricket",
        element: <AuthenticatedRoute element={<Cricket/>} />,
      },
      {
        path: "/sport/football",
        element: <AuthenticatedRoute element={<Football/>} />,
      },
      {
        path: "/sport/kabaddi",
        element: <AuthenticatedRoute element={<Kabaddi/>} />,
      },
      
      {
        path: "/signup",
        element: <Signup/>
      },
      {
        path: '/recruitment',
        element: <AuthenticatedRoute element={<Clubrec/>} />,
      },
      {
        path: '/requisition',
        element: <AuthenticatedRoute element={<Requisition/>} />,
      }

]);
export default router;
