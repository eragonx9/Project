import React, { useState } from 'react';

import { useNavigate, Route, Routes, Outlet } from 'react-router-dom';
import Sport from './Domain/Sport';
import Tech from './Domain/Tech';
import Cult from './Domain/Cult';
import './App.css'
import Feedback from './Depriciated/Feedback/Feedback';

//Frontend Related Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Bulletin from './Components/Bulletin/Bulletin';
import VenueBooking from './Components/VenueBooking/VenueBooking';
import FeedbackForm from './Components/FeedbackForm/FeedbackForm';
import Footer from './Components/Footer/Footer';

function App() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <body className='bg-dark' data-bs-theme="dark">
      
      <div className='Header sticky-top'>
      <Header/>
      </div>

      <div className="TitleContent">
        <div className='Bulletin bg-secondary border-right border-bottom'>
        <Bulletin/>
        </div>
        <div className='VenueBook bg-secondary border-left border-bottom'>
        <VenueBooking/>
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
      </Routes>
    </body>
  );
}

export default App;
