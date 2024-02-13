import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Route, Routes, Outlet } from 'react-router-dom';

const Footer = () => {
  
  const navigate = useNavigate();

  const handleNavigate = (path) => {
  navigate(path);
};

  return (

<footer className="bg-dark d-flex flex-wrap justify-content-between align-items-center py-2 mt-2 mx-0 px-4 mt-4 border-top">
    <p className="col-md-4 mb-0 text-muted">© 2023, ISDL-LAB-Group-42</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a onClick={() => handleNavigate('/login')} className="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a onClick className="nav-link px-2 text-muted">About</a></li>
    </ul>
  </footer>
  )
}

export default Footer