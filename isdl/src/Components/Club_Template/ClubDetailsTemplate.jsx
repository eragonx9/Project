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
      <div className="p-5 text-center bg-body-tertiary">
        <div className="container py-5">
          <h1 className="text-body-emphasis">Full-width jumbotron</h1>
          <p className="col-lg-8 mx-auto lead">
              This takes the basic jumbotron above and makes its background edge-to-edge with a <code>.container</code> inside to align content. Similar to above, it's been recreated with built-in grid and utility classes.
          </p>
        </div>
      </div>
      
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
