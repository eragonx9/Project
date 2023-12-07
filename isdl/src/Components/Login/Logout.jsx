import React from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

// Replace with your Firebase configuration
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <>
      <Navbar className="border-bottom" bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/login">ECAMS</Navbar.Brand>
          <Nav className="flex justify-content-center">
            <Nav.Link onClick={() => handleNavigate('/tech')}>Technical Clubs</Nav.Link>
            <Nav.Link onClick={() => handleNavigate('/cult')}>Cultural Clubs</Nav.Link>
            <Nav.Link onClick={() => handleNavigate('/sport')}>Sports Clubs</Nav.Link>
          </Nav>
          <Button variant="light" onClick={handleLogout}>
            Log out
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
