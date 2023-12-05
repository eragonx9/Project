import React from 'react'

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
function App() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      
      <nav class="flex gap-6 mb-8">
        <button
          
          onClick={() => handleNavigate('/tech/quizzinga')}
        >
          Quizzinga
        </button>
        <button
          
          onClick={() => handleNavigate('/tech/debsoc')}
        >
          Debsoc
        </button>
        <button
          
          onClick={() => handleNavigate('/tech/Cipher')}
        >
          Cipher
        </button>
        <button
          
          onClick={() => handleNavigate('/tech/Astronomy')}
        >
          Astronomy
        </button>
        <button
          
          onClick={() => handleNavigate('/tech/phoenix')}
        >
          Phoenix
        </button>
        <button
          
          onClick={() => handleNavigate('/tech/cybros')}
        >
          Cybros
        </button>
        <button onClick={() => handleNavigate('/recruitment')}>Club Recruitment</button>
        <button onClick={() => handleNavigate('/requisition')}>Requisition</button> 
      </nav>

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
    </>
  );
}

export default App