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
    <body className='bg-dark' data-bs-theme="dark">
      
      <div className='Header sticky-top'>
      <Header/>
      </div>

      <div className='ImgSlideshow'>
        <div id="carouselExample" className="carousel slide mx-3">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={i1} className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
              <img src={i2} className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
              <img src={i3} className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
              <img src={i4} className="d-block w-100" alt="..."></img>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>

      <div className="TitleContent">
        
        <div className='Bulletin bg-secondary border-dark'>
          <Bulletin/>
        </div>


        <div className='VenueBook bg-secondary px-4 py-3 border-dark d-flex justify-content-center align-items-center'>
          <div className="card mx-10 my-3 rounded-4" style={{width: "20rem"}} >
            <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/login/venuebook')} style={{height: "auto", width: "100%", display: "block", objectFit:'cover'}} src={lt_im1} data-holder-rendered="true"></img>

            <div className="card-body d-flex flex-column">
              <h5 className="card-title flex-grow-1">Venue Booking System</h5>
              <button className='btn btn-primary' onClick={() => handleNavigate('/login/venuebook')}>Book Venue</button>
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
