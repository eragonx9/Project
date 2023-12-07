
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
import Badminton_logo from './Assets/Badminton.jpeg'
import Cricket_logo from './Assets/Cricket.jpeg'
import Football_logo from './Assets/Football.jpeg'
import Kabaddi_logo from './Assets/Kabbadi.jpeg'

function App() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <body className='bg-dark' data-bs-theme="dark">
      <Header/>
      
      <div className='d-flex flex-column'>
      <div className='DomainPage d-flex flex-wrap justify-content-center my-4'>

        <div className="card mx-4 my-2" style={{width: "16rem"}}>
          <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/sport/badminton')} style={{height: "16rem", width: "100%", display: "block", objectFit: "cover"}} src={Badminton_logo} data-holder-rendered="true"></img>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Badminton</h5>
            <p className="card-text flex-grow-1">The Badminton Club of LNMIIT</p>
            <button className='btn btn-primary' onClick={() => handleNavigate('/sport/badminton')}>Check It Out</button>
          </div>
        </div>

        <div className="card mx-4 my-2" style={{width: "16rem"}}>
          <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/sport/cricket')} style={{height: "16rem", width: "100%", display: "block", objectFit: "cover"}} src={Cricket_logo} data-holder-rendered="true"></img>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Cricket</h5>
            <p className="card-text flex-grow-1">The Cricket Club of LNMIIT</p>
            <button className='btn btn-primary' onClick={() => handleNavigate('/sport/cricket')}>Check It Out</button>
          </div>
        </div>

        <div className="card mx-4 my-2" style={{width: "16rem"}} >
          <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/sport/football')} style={{height: "16rem", width: "100%", display: "block", objectFit: "cover"}} src={Football_logo} data-holder-rendered="true"></img>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Football</h5>
            <p className="card-text flex-grow-1">The Football Club of LNMIIT</p>
            <button className='btn btn-primary' onClick={() => handleNavigate('/sport/football')}>Check It Out</button>
          </div>
        </div>

        <div className="card mx-4 my-2" style={{width: "16rem"}}>
          <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/sport/kabaddi')} style={{height: "16rem", width: "100%", display: "block", objectFit: "cover"}} src={Kabaddi_logo} data-holder-rendered="true"></img>
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Kabaddi</h5>
            <p className="card-text flex-grow-1">The Kabaddi Club of LNMIIT</p>
            <button className='btn btn-primary' onClick={() => handleNavigate('/sport/kabaddi')}>Check It Out</button>
          </div>
        </div>

      </div>

      <nav className="mt-4 d-flex flex-column justify-content-center align-items-center mb-1">
        <button className="btn btn-lg btn-secondary my-1 flex-grow-1" onClick={() => handleNavigate('/recruitment')}>Apply For Club Recruitments Here!</button>  
        <button className="btn btn-lg btn-secondary my-1" onClick={() => handleNavigate('/requisition')}>Apply For Requisitions Here</button>
      </nav>
      </div>

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