import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Route, Routes, Outlet } from 'react-router-dom';
import Login from "../Login/Login";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header() {
    
    const navigate = useNavigate();

    const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <Navbar className="border-bottom" bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">ECAMS</Navbar.Brand>
          <Nav className=" flex justify-content-center">
            <Nav.Link onClick={() => handleNavigate('/tech')}>Technical Clubs</Nav.Link>
            <Nav.Link onClick={() => handleNavigate('/cult')}>Cultural Clubs</Nav.Link>
            <Nav.Link onClick={() => handleNavigate('/sport')}>Sports Clubs</Nav.Link>
          </Nav>
          <Button variant="light" onClick={() => handleNavigate('/login')}>Login</Button>{' '}
        </Container>
      </Navbar>

      <Routes>
      <Route path="/login" element={<Login />} />
      </Routes>

    </>
  );
}

export default Header;