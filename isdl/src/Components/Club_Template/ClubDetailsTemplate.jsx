// ClubDetailsTemplate.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const ClubDetailsTemplate = ({ clubDetails }) => {
  const { name, contact, otherDetails, image, ClubDetails, email } = clubDetails;

  return (
    <>
      <Header/>
      <div>
        <h2>{name}</h2>
        <img src={image} alt={`${name} Logo`} style={{ maxWidth: '100%' }} />
        <p>Club Details: {ClubDetails}</p>
        <p>Email: {email}</p>
        <p>Contact: {contact}</p>
        {/* Add other details as needed */}
      </div>
      <Footer/>
    </>
  );
};

export default ClubDetailsTemplate;
