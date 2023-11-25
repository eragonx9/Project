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
import NavBar from './Components/NavBar/NavBar';

function App() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <NavBar/>

      <nav className="flex gap-6 mb-8">
        <button
          
          onClick={() => handleNavigate('/tech')}
        >
          Tech
        </button>
        <button
          
          onClick={() => handleNavigate('/cult')}
        >
          Cult
        </button>
        <button
          
          onClick={() => handleNavigate('/sport')}
        >
          Sport
        </button>
      </nav>

      <NoticeBoard/>
      <Feedback/>
      <Venuebook/>
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
