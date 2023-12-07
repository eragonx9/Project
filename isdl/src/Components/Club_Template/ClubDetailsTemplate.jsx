// ClubDetailsTemplate.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MultiLine.css'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const ClubDetailsTemplate = ({ clubDetails }) => {
  const { name, contact, otherDetails, image, ClubDetails, email } = clubDetails;

  return (
    <>
      <Header/>
      <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      
      <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">{name}</h1>
          <p className="lead">{ClubDetails}</p>
          <div className="display-linebreak d-grid gap-2 d-md-flex-column justify-content-md-start align-items-md-center">
            <h3>Contact The Coordinators:</h3>
            <h5>{contact}</h5>
          </div>
      </div>

      <div className="col-10 col-sm-8 col-lg-6">
        <img src={image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
      </div>
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
