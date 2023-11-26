import React, { useState } from 'react';

import { useNavigate, Route, Routes, Outlet } from 'react-router-dom';
import Sport from './Domain/Sport';
import Tech from './Domain/Tech';
import Cult from './Domain/Cult';
import './App.css'
import NoticeBoard from './NoticeBoard/NoticeBoard';
import Feedback from './Feedback/Feedback';
import Venuebook from './Venuebook/Venuebook';

//Frontend Related Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header'
import Bulletin from './Components/Bulletin/Bulletin';
import VenueBooking from './Components/VenueBooking/VenueBooking';

function App() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <Header/>
      <div className="TitleContent">
        <div className='Bulletin border-right border-bottom'>
        <Bulletin/>
        </div>
        <div className='VenueBook'>
        <VenueBooking/>
        </div>
      </div>
      <Venuebook/>
      <Feedback/>
      <Outlet />

      <Routes>
        <Route path="/sport" element={<Sport />} />
        <Route path="/cult" element={<Cult />} />
        <Route path="/tech" element={<Tech />} />
      </Routes>
    </>
  );
}

export default App;
