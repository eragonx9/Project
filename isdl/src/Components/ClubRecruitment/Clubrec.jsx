import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ClubRecruitment = () => {
  const initialFormData = {
    domain: '',
    club: '',
    name: '',
    rollNumber: '',
    contact: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to the backend
      const response = await fetch('http://localhost:5000/submit-club-recruitment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Club recruitment form submitted successfully!');
        setSubmitMessage('Form submitted successfully!');
        setFormData(initialFormData); // Reset the form
        // You can perform additional actions here if needed
      } else {
        console.error('Failed to submit club recruitment form');
        setSubmitMessage('Failed to submit form. Please try again.');
        // Handle the error accordingly
      }
    } catch (error) {
      console.error('Error submitting club recruitment form:', error);
      setSubmitMessage('Error submitting form. Please try again.');
      // Handle the error accordingly
    }
  };

  // Define club options for each domain
  const clubOptions = {
    tech: ['Quizzinga', 'Debsoc', 'Phoenix', 'Astronomy','Cipher','Cybros'],
    cult: ['Rendition', 'Capriccio', 'Insignia', 'LC','Eminence','Imagination','Aaveg','Media Cell'],
    sport: ['Football ', 'Cricket', 'Badminton ', 'kabaddi'],
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Club Recruitment Form</h2>
      {submitMessage && <div className="alert alert-success">{submitMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="domain" className="form-label">
            Select Domain:
          </label>
          <select
            id="domain"
            name="domain"
            value={formData.domain}
            onChange={handleInputChange}
            className="form-select"
          >
            <option value="">Select Domain</option>
            <option value="tech">Tech</option>
            <option value="cult">Cult</option>
            <option value="sport">Sport</option>
          </select>
        </div>

        {formData.domain && (
          <div className="mb-3">
            <label htmlFor="club" className="form-label">
              Select Club:
            </label>
            <select
              id="club"
              name="club"
              value={formData.club}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="">Select Club</option>
              {clubOptions[formData.domain].map((clubName) => (
                <option key={clubName} value={clubName}>
                  {clubName}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="rollNumber" className="form-label">
            Roll Number:
          </label>
          <input
            type="text"
            id="rollNumber"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contact" className="form-label">
            Contact:
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ClubRecruitment;
