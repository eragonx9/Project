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
import LC_logo from "./Assets/LC.png"
import MCell_logo from './Assets/MCell.jpeg'
import Rendition_logo from './Assets/Rendition.jpeg'
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
            <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/cult/aaveg')} style={{height: "auto", width: "100%", display: "block"}} src={Aaveg_logo} data-holder-rendered="true"></img>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Aaveg</h5>
              <p className="card-text flex-grow-1">The Nukkad Mandli of LNMIIT</p>
              <button className='btn btn-primary' onClick={() => handleNavigate('/cult/aaveg')}>Check It Out</button>
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

        <div className="card mx-4 my-2" style={{width: "16rem"}} >
            <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/cult/lc')} style={{height: "auto", width: "100%", display: "block"}} src={LC_logo} data-holder-rendered="true"></img>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">The Literary Committee</h5>
              <p className="card-text flex-grow-1">The Literary Society of LNMIIT</p>
              <button className='btn btn-primary' onClick={() => handleNavigate('/cult/lc')}>Check It Out</button>
            </div>
        </div>

        <div className="card mx-4 my-2" style={{width: "16rem"}} >
            <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/cult/mediacell')} style={{height: "auto", width: "100%", display: "block"}} src={MCell_logo} data-holder-rendered="true"></img>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Media Cell</h5>
              <p className="card-text flex-grow-1">The Media Body of LNMIIT</p>
              <button className='btn btn-primary' onClick={() => handleNavigate('/cult/mediacell')}>Check It Out</button>
            </div>
        </div>

        <div className="card mx-4 my-2" style={{width: "16rem"}} >
            <img className="card-img-top" data-src="holder.js/100px180/" onClick={() => handleNavigate('/cult/rendition')} style={{height: "auto", width: "100%", display: "block"}} src={Rendition_logo} data-holder-rendered="true"></img>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Rendition</h5>
              <p className="card-text flex-grow-1">The Dramatics Club of LNMIIT</p>
              <button className='btn btn-primary' onClick={() => handleNavigate('/cult/rendition')}>Check It Out</button>
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