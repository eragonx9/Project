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
          <div className="lead display-linebreak d-grid gap-2 d-md-flex-column justify-content-md-start align-items-md-center">
            <h4>Contact Us:</h4>
            <p>{contact}</p>
            <p> <a href={"mailto:"+email}>{email}</a></p>
          </div>
      </div>

      <div className="col-10 col-sm-8 col-lg-6">
        <img src={image} className="d-block mx-lg-auto img-fluid" style={{width: '300rem', aspectRatio: 1 / 1, objectFit:'cover', objectPosition: 'center'}} loading="lazy"></img>
      </div>
    </div>
    <Footer/>
  </div>
      
     
    </>
  );
};

export default ClubDetailsTemplate;
