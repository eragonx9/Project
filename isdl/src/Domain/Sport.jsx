
import React from 'react'
import { useNavigate, Route, Routes, Outlet } from 'react-router-dom';
import Cricket from './Sport/Cricket';
import Badminton from './Sport/Badminton';
import Football from './Sport/Football';
import Kabaddi from './Sport/Kabaddi';
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
      <button onClick={() => handleNavigate('/sport/badminton')}>Badminton</button>
      <button onClick={() => handleNavigate('/sport/cricket')}>Cricket</button>
      <button onClick={() => handleNavigate('/sport/football')}>Football</button>
      <button onClick={() => handleNavigate('/sport/kabaddi')}>Kabaddi</button>
      <button onClick={() => handleNavigate('/recruitment')}>Club Recruitment</button> 
      <button onClick={() => handleNavigate('/requisition')}>Requisition</button>    
      </nav>

      <Outlet />

      <Routes>
        <Route path="/sport/badminton" element={<Badminton />} />
        <Route path="/sport/cricket" element={<Cricket />} />
        <Route path="/sport/football" element={<Football />} />
        <Route path="/sport/kabaddi" element={<Kabaddi />} />
        <Route path="/recruitment" element={< Clubrec />} />
        <Route path="/requisition" element={< Requisition />} />
      </Routes>
    </>
  );
}

export default App