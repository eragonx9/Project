
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css'

import { useNavigate, Route, Routes, Outlet } from 'react-router-dom';
import Cricket from './Sport/Cricket';
import Badminton from './Sport/Badminton';
import Football from './Sport/Football';
import Kabaddi from './Sport/Kabaddi';
import Clubrec from "../Components/ClubRecruitment/Clubrec";
import Requisition from '../Components/Requisition/Requisition';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

//Logo Imports


function App() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <body className='bg-dark' data-bs-theme="dark">
      <Header/>


      <nav className="d-flex flex-column justify-content-center align-items-center mb-8">
        <button className="btn btn-secondary my-1 flex-grow-1" onClick={() => handleNavigate('/requisition')}>Apply For Club Recruitment Here!</button>  
        <button className="btn btn-secondary my-1" onClick={() => handleNavigate('/requisition')}>Apply For Requisitions Here (Using Your Club's Email ID)</button>
      </nav>

      <nav className="flex gap-6 mb-8">
      <button onClick={() => handleNavigate('/sport/badminton')}>Badminton</button>
      <button onClick={() => handleNavigate('/sport/cricket')}>Cricket</button>
      <button onClick={() => handleNavigate('/sport/football')}>Football</button>
      <button onClick={() => handleNavigate('/sport/kabaddi')}>Kabaddi</button>
      <button onClick={() => handleNavigate('/recruitment')}>Club Recruitment</button> 
      <button onClick={() => handleNavigate('/requisition')}>Requisition</button>    
      </nav>

      <Footer/>
      <Outlet />

      <Routes>
        <Route path="/sport/badminton" element={<Badminton />} />
        <Route path="/sport/cricket" element={<Cricket />} />
        <Route path="/sport/football" element={<Football />} />
        <Route path="/sport/kabaddi" element={<Kabaddi />} />
        <Route path="/recruitment" element={< Clubrec />} />
        <Route path="/requisition" element={< Requisition />} />
      </Routes>
    </body>
  );
}

export default App