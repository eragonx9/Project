// ClubDetailsTemplate.jsx
import React from 'react';

const ClubDetailsTemplate = ({ clubDetails }) => {
  const { name, contact, otherDetails, image, ClubDetails, email } = clubDetails;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={`${name} Logo`} style={{ maxWidth: '100%' }} />
      <p>Club Details: {ClubDetails}</p>
      <p>Email: {email}</p>
      <p>Contact: {contact}</p>
      {/* Add other details as needed */}
    </div>
  );
};

export default ClubDetailsTemplate;
