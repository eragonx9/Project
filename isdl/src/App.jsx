import React, { useState } from 'react';
import { useEffect } from 'react';

import { useNavigate, Route, Routes, Outlet } from 'react-router-dom';
import Sport from './Domain/Sport';
import Tech from './Domain/Tech';
import Cult from './Domain/Cult';
import './App.css';
import Feedback from './Depriciated/Feedback/Feedback';


import '../src/Domain/Cards.css'
//Frontend Related Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Bulletin from './Components/Bulletin/Bulletin';
import VenueBooking from './Components/VenueBooking/VenueBooking';
import FeedbackForm from './Components/FeedbackForm/FeedbackForm';
import Footer from './Components/Footer/Footer';

//Image imports
import lt_im1 from '../src/Domain/Assets/lt.jpg';
import i1 from './Domain/Assets/lnmiit/lnmiit1.jpeg';
import i2 from './Domain/Assets/lnmiit/lnmiit2.jpeg';
import i3 from './Domain/Assets/lnmiit/lnmiit3.jpeg';
import i4 from './Domain/Assets/lnmiit/lnmiit4.png';

function App() {

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <body data-bs-theme="dark">
      
      <div className='Header sticky-top'>
      <Header/>
      </div>

      <div className="TitleContent">
        
        <div className='Bulletin border-dark'>
          <Bulletin/>
        </div>

      <div className='VenueBook px-4'>
        <div className='VenueBook-ele my-2 px-4 pt-3 pb-1 rounded-4 d-flex justify-content-center align-items-center'>
          <div className="card mx-auto my-3 rounded-4" style={{width: "14rem"}} >
            <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/login/venuebook')} style={{height: "auto", width: "100%", display: "block", objectFit:'cover'}} src={lt_im1} data-holder-rendered="true"></img>

            <div className="card-body d-flex flex-column">
              <h5 className="card-title flex-grow-1">Venue Booking System</h5>
              <button className='btn btn-primary' onClick={() => handleNavigate('/login/venuebook')}>Book Venue</button>
            </div>
          </div>
        </div>
      </div>

      </div>
      


      <div className='FeedbackForm px-2'>
        <FeedbackForm/>
      </div>
      
      <div className='Footer'>
      <Footer/>
      </div>
      
      {/*Routing related*/}
      <Outlet />
      <Routes>
        <Route path="/sport" element={<Sport />} />
        <Route path="/cult" element={<Cult />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/feedback" element={<Feedback />}/>
        <Route path="/login/venuebook" element={<VenueBooking />}/>
      </Routes>
    </body>
  );
}

export default App;
