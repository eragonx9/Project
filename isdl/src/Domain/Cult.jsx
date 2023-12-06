import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css'

import { useNavigate, Route, Routes, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LC from './Cult/LC';
import Capriccio from './Cult/Capriccio';
import Insignia from './Cult/Insignia';
import Imagination from './Cult/Imagination';
import Rendition from './Cult/Rendition';
import Mediacell from './Cult/Mediacell';
import Aaveg from './Cult/Aaveg';
import Eminence from './Cult/Eminence';
import Clubrec from '../Components/ClubRecruitment/Clubrec';
import Requisition from '../Components/Requisition/Requisition';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

//Logo Imports
import Aaveg_logo from './Assets/Aaveg.png'
import Capriccio_logo from './Assets/Capriccio.jpeg'
import Eminence_logo from './Assets/Eminence.jpeg'
import Imagi_logo from './Assets/Imagi.png'
import Insignia_logo from './Assets/Insignia.jpeg'

function App() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <body className='bg-dark' data-bs-theme="dark">

      <Header/>

      <div className='DomainPage d-flex flex-wrap justify-content-center my-4'>

        <div className="card mx-4 my-2" style={{width: "16rem"}} >
            <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/cult/lc')} style={{height: "auto", width: "100%", display: "block"}} src={Aaveg_logo} data-holder-rendered="true"></img>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Aaveg</h5>
              <p className="card-text flex-grow-1">The Nukkad Mandli of LNMIIT</p>
              <button className='btn btn-primary' onClick={() => handleNavigate('/cult/lc')}>Check It Out</button>
            </div>
        </div>

        <div className="card mx-4 my-2" style={{width: "16rem"}} >
            <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/cult/capriccio')} style={{height: "auto", width: "100%", display: "block"}} src={Capriccio_logo} data-holder-rendered="true"></img>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Capriccio</h5>
              <p className="card-text flex-grow-1">The Music Club of LNMIIT</p>
              <button className='btn btn-primary' onClick={() => handleNavigate('/cult/capriccio')}>Check It Out</button>
            </div>
        </div>

        <div className="card mx-4 my-2" style={{width: "16rem"}} >
            <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/cult/Eminence')} style={{height: "auto", width: "100%", display: "block"}} src={Eminence_logo} data-holder-rendered="true"></img>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Eminence</h5>
              <p className="card-text flex-grow-1">The Fashion Club of LNMIIT</p>
              <button className='btn btn-primary' onClick={() => handleNavigate('/cult/Eminence')}>Check It Out</button>
            </div>
        </div>

        <div className="card mx-4 my-2" style={{width: "16rem"}} >
            <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/cult/imagination')} style={{height: "auto", width: "100%", display: "block"}} src={Imagi_logo} data-holder-rendered="true"></img>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Imagination</h5>
              <p className="card-text flex-grow-1">The Photography Club of LNMIIT</p>
              <button className='btn btn-primary' onClick={() => handleNavigate('/cult/imagination')}>Check It Out</button>
            </div>
        </div>

        <div className="card mx-4 my-2" style={{width: "16rem"}} >
            <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/cult/insignia')} style={{height: "auto", width: "100%", display: "block"}} src={Insignia_logo} data-holder-rendered="true"></img>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Insignia</h5>
              <p className="card-text flex-grow-1">The Dance Club of LNMIIT</p>
              <button className='btn btn-primary' onClick={() => handleNavigate('/cult/insignia')}>Check It Out</button>
            </div>
        </div>

      </div>
      
      <nav className="flex gap-6 mb-8">
        <button onClick={() => handleNavigate('/cult/capriccio')}>Capriccio</button>
        <button onClick={() => handleNavigate('/cult/insignia')}>Insignia</button>
        <button onClick={() => handleNavigate('/cult/imagination')}>Imagination</button>
        <button onClick={() => handleNavigate('/cult/rendition')}>Rendition</button>
        <button onClick={() => handleNavigate('/cult/mediacell')}>Mediacell</button>
        <button onClick={() => handleNavigate('/cult/aaveg')}>Aaveg</button>
        <button onClick={() => handleNavigate('/cult/eminence')}>Eminence</button>
        <button onClick={() => handleNavigate('/cult/lc')}>Lc</button>
        <button onClick={() => handleNavigate('/recruitment')}>Club Recruitment</button>
        <button onClick={() => handleNavigate('/requisition')}>Requisition</button>        
      </nav>

      <Footer/>

      <Outlet />

      <Routes>
        <Route path="/cult/lc" element={<LC />} />
        <Route path="/cult/capriccio" element={<Capriccio />} />
        <Route path="/cult/insignia" element={<Insignia />} />
        <Route path="/cult/imagination" element={<Imagination />} />
        <Route path="/cult/rendition" element={<Rendition />} />
        <Route path="/cult/mediacell" element={<Mediacell />} />
        <Route path="/cult/aaveg" element={<Aaveg />} />
        <Route path="/cult/Eminence" element={<Eminence />} />
        <Route path="/recruitment" element={< Clubrec />} />
        <Route path="/requisition" element={< Requisition />} />
      </Routes>
    </body>
  );
}

export default App