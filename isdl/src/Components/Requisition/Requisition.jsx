import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Requisition = () => {
  const [formData, setFormData] = useState({
    club: '',
    eventName: '',
    eventDate: '',
    amount: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [allRequisitions, setAllRequisitions] = useState([]);
  const [selectedRequisition, setSelectedRequisition] = useState(null);
  const [showAllRequisitions, setShowAllRequisitions] = useState(false);
  const [viewPassword, setViewPassword] = useState('');
  const [submitPassword, setSubmitPassword] = useState('');

  useEffect(() => {
    // Fetch all requisitions when the component mounts
    fetchAllRequisitions();
  }, [isFormSubmitted]);

  const handleInputChange = (e) => {
    // Update the form data when input fields change
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check the submit password
    if (submitPassword !== 'club') {
      alert('Incorrect submit password. Please try again.');
      return;
    }

    try {
      // Make a POST request to add the requisition
      const response = await fetch('http://localhost:5000/submit-requisition', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text(); // Read the error response as text
        console.error('Error response from server:', errorText);
        throw new Error('Error adding requisition');
      }

      // Update the requisitions state with the new requisition
      setFormData({
        club: '',
        eventName: '',
        eventDate: '',
        amount: '',
      });
      setIsFormSubmitted(true);
    } catch (error) {
      console.error('Error adding requisition:', error.message);
      alert('Error adding requisition. Please try again.');
    }
  };

  const fetchAllRequisitions = async () => {
    try {
      const response = await fetch('http://localhost:5000/all-requisitions');
      const data = await response.json();
      setAllRequisitions(data);
    } catch (error) {
      console.error('Error fetching requisitions:', error);
    }
  };

  const handleRequisitionClick = (req) => {
    // Toggle selected requisition on button click
    setSelectedRequisition((prevReq) => (prevReq === req ? null : req));
  };

  const handleToggleRequisitions = () => {
    // Check the view password
    if (viewPassword !== 'finance') {
      alert('Incorrect view password. Please try again.');
      return;
    }

    // Toggle visibility of all requisitions
    setShowAllRequisitions((prevShow) => !prevShow);
  };

  const handleDeleteRequisition = async (reqId) => {
    try {
      // Make a DELETE request to remove the requisition
      const response = await fetch(`http://localhost:5000/delete-requisition/${reqId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        // Handle the case where the deletion was not successful
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      // Update the requisitions state after successful deletion
      fetchAllRequisitions();
      alert('Requisition deleted successfully!');
    } catch (error) {
      console.error('Error deleting requisition:', error.message);
      alert('Error deleting requisition. Please try again.');
    }
  };

 return (
  <>
  <Header/>
  <div className="container mt-5 bg-dark rounded-4 my-3 p-2">
    <h2 className="mb-4">Requisition</h2>

    {!isFormSubmitted && (
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="club" className="form-label">
            Club
          </label>
          <input
            type="text"
            className="form-control"
            id="club"
            name="club"
            value={formData.club}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eventName" className="form-label">
            Event Name
          </label>
          <input
            type="text"
            className="form-control"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eventDate" className="form-label">
            Event Date
          </label>
          <input
            type="date"
            className="form-control"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="submitPassword" className="form-label">
            Enter Password to Submit Form
          </label>
          <input
            type="password"
            className="form-control"
            id="submitPassword"
            value={submitPassword}
            onChange={(e) => setSubmitPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    )}

    {isFormSubmitted && (
      <div>
        <p className="mb-3">Requisition has been submitted. Click the button below to view all submitted forms:</p>
        <button
          className="btn btn-success me-3"
          onClick={() => setIsFormSubmitted(false)}
        >
          Form submitted, fill a new form?
        </button>
      </div>
    )}

    {/* Display all requisitions as dynamic buttons */}
    {allRequisitions.length > 0 && (
      <div className="mt-5">
        <h3>All Requisitions</h3>
        <div className="mb-3">
          <label htmlFor="viewPassword" className="form-label">
            Enter Password to View Requisitions
          </label>
          <input
            type="password"
            className="form-control"
            id="viewPassword"
            value={viewPassword}
            onChange={(e) => setViewPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="btn btn-secondary mb-3"
          onClick={handleToggleRequisitions}
        >
          {showAllRequisitions ? 'Hide All Requisitions' : 'Show All Requisitions'}
        </button>
        {showAllRequisitions &&
          allRequisitions.map((req) => (
            <div key={req._id} className="mb-3">
              <button
                className="btn btn-secondary"
                onClick={() => handleRequisitionClick(req)}
              >
                Requisition: {req.club}
              </button>
              {selectedRequisition === req && (
                <div>
                  <p>
                    Club: {req.club}, Event Name: {req.eventName}, Event Date:{' '}
                    {req.eventDate}, Amount: {req.amount}
                  </p>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDeleteRequisition(req._id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>
    )}
  </div>

                <Footer/>
  </>
);

};

export default Requisition;
