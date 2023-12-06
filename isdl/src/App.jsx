import React, { useState } from 'react';

import { useNavigate, Route, Routes, Outlet } from 'react-router-dom';
import Sport from './Domain/Sport';
import Tech from './Domain/Tech';
import Cult from './Domain/Cult';
import './App.css'
import Feedback from './Depriciated/Feedback/Feedback';

import lt_logo from '../src/Domain/Assets/lt.jpg'
import '../src/Domain/Cards.css'
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
        <div className='Bulletin bg-secondary border-dark'>
        <Bulletin/>
        </div>


        <div className='VenueBook bg-secondary border-dark'>
        <div className="card mx-10 my-3" style={{width: "16rem"}} >
          <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/venuebook')} style={{height: "auto", width: "100%", display: "block"}} src={lt_logo} data-holder-rendered="true"></img>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Venue Booking System</h5>
            
            <button className='btn btn-primary' onClick={() => handleNavigate('/venuebook')}>Book Venue</button>
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
        <Route path="/venuebook" element={<VenueBooking />}/>
      </Routes>
    </body>
  );
}

export default App;
