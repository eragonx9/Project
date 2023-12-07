import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css'

import { useNavigate, Route, Routes, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Quizzinga from './Tech/Quizzinga';
import Cipher from './Tech/Cipher';
import Debsoc from './Tech/Debsoc';
import Astronomy from './Tech/Astronomy';
import Phoenix from './Tech/Phoenix';
import Cybros from './Tech/Cybros';
import Clubrec from "../Components/ClubRecruitment/Clubrec";
import Requisition from '../Components/Requisition/Requisition';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

//Logo Imports
import Quizzinga_logo from './Assets/Quizzinga.jpg'
import Cipher_logo from './Assets/Cipher.png'
import Debsoc_logo from './Assets/Debsoc.jpg'
import Phoenix_logo from './Assets/Phoenix.jpg'
import Astronomy_logo from './Assets/Astronomy.jpg'
import Cybros_logo from './Assets/Cybros.jpg'


function App() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <body className='bg-dark' data-bs-theme="dark">
      <Header/>
      
      <div className='DomainPage d-flex flex-wrap justify-content-center my-4'>
        
        <div className="card mx-4 my-2" style={{width: "16rem"}}>
          <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/tech/Astronomy')} style={{height: "auto", width: "100%", display: "block"}} src={Astronomy_logo}data-holder-rendered="true"></img>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Astronomy</h5>
            <p className="card-text flex-grow-1">The Astronomy Club of LNMIIT</p>
            <button className='btn btn-primary' onClick={() => handleNavigate('/tech/Astronomy')}>Check It Out</button>
          </div>
        </div>

        <div className="card mx-4 my-2" style={{width: "16rem"}}>
          <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/tech/Cipher')} style={{height: "auto", width: "100%", display: "block"}} src={Cipher_logo} data-holder-rendered="true"></img>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Cipher</h5>
            <p className="card-text flex-grow-1">The Cybersecurity and Blockchain Club of LNMIIT</p>
            <button className='btn btn-primary' onClick={() => handleNavigate('/tech/Cipher')}>Check It Out</button>
          </div>
        </div>

        <div className="card mx-4 my-2" style={{width: "16rem"}}>
          <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/tech/cybros')} style={{height: "auto", width: "100%", display: "block"}} src={Cybros_logo} data-holder-rendered="true"></img>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Cybros</h5>
            <p className="card-text flex-grow-1">The Competitive Coding Club of LNMIIT</p>
            <button className='btn btn-primary' onClick={() => handleNavigate('/tech/cybros')}>Check It Out</button>
          </div>
        </div>

        <div className="card mx-4 my-2" style={{width: "16rem"}}>
          <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/tech/debsoc')} style={{height: "auto", width: "100%", display: "block"}} src={Debsoc_logo} data-holder-rendered="true"></img>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Debsoc</h5>
            <p className="card-text flex-grow-1">The Debating Society of LNMIIT</p>
            <button className='btn btn-primary' onClick={() => handleNavigate('/tech/debsoc')}>Check It Out</button>
          </div>
        </div>

        <div className="card mx-4 my-2" style={{width: "16rem"}}>
          <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/tech/phoenix')} style={{height: "auto", width: "100%", display: "block"}} src={Phoenix_logo} data-holder-rendered="true"></img>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Phoenix</h5>
            <p className="card-text flex-grow-1">The Robotics Club of LNMIIT</p>
            <button className='btn btn-primary' onClick={() => handleNavigate('/tech/phoenix')}>Check It Out</button>
          </div>
        </div>

        <div className="card mx-4 my-2" style={{width: "16rem"}} >
          <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/tech/quizzinga')} style={{height: "auto", width: "100%", display: "block"}} src={Quizzinga_logo} data-holder-rendered="true"></img>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Quizzinga</h5>
            <p className="card-text flex-grow-1">The Quizzing Club of LNMIIT</p>
            <button className='btn btn-primary' onClick={() => handleNavigate('/tech/quizzinga')}>Check It Out</button>
          </div>
        </div>

      </div>
      
      
      <nav className="d-flex flex-column justify-content-center align-items-center mb-8">
        <button className="btn btn-lg btn-secondary my-1 flex-grow-1" onClick={() => handleNavigate('/recruitment')}>Apply For Club Recruitments Here!</button>  
        <button className="btn btn-lg btn-secondary my-1" onClick={() => handleNavigate('/requisition')}>Apply For Requisitions Here</button>
      </nav>
      
      <Footer/>

      <Outlet />

      <Routes>
        <Route path="/tech/quizzinga" element={<Quizzinga />} />
        <Route path="/tech/cipher" element={<Cipher />} />
        <Route path="/tech/debsoc" element={<Debsoc />} />
        <Route path="/tech/Phoenix" element={<Phoenix />} />
        <Route path="/tech/astronomy" element={<Astronomy />} />
        <Route path="/tech/Cybros" element={<Cybros />} />
        <Route path="/recruitment" element={< Clubrec />} />
        <Route path="/requisition" element={< Requisition />} />
      </Routes>
    </body>
  );
}

export default App