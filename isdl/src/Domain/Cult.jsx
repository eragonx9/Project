import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

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


function App() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <body className='bg-dark' data-bs-theme="dark">

      <Header/>
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