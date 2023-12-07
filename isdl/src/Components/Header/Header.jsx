import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };


  return (
    <>
      <Navbar className="border-bottom" bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand style={{cursor:'pointer'}} onClick={() => handleNavigate('/login/')}>ECAMS</Navbar.Brand>
          <Nav className="flex justify-content-center">
            <Nav.Link onClick={() => handleNavigate('/tech')}>Technical Clubs</Nav.Link>
            <Nav.Link onClick={() => handleNavigate('/cult')}>Cultural Clubs</Nav.Link>
            <Nav.Link onClick={() => handleNavigate('/sport')}>Sports Clubs</Nav.Link>
          </Nav>
          <Button variant="light" href="/">
            Log out
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
