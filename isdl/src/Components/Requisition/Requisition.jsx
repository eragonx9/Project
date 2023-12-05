import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Requisition = () => {
  const [formData, setFormData] = useState({
    club: '',
    eventName: '',
    eventDate: '',
    amount: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isApprovalMode, setIsApprovalMode] = useState(false);
  const [allRequisitions, setAllRequisitions] = useState([]);

  useEffect(() => {
    // Fetch all requisitions when the component mounts
    fetchAllRequisitions();
  }, []);

  const handleInputChange = (e) => {
    // Update the form data when input fields change
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStartForm = () => {
    setIsFormSubmitted(false);
    setIsApprovalMode(false);
  };

  const handleStartApproval = async () => {
    setIsFormSubmitted(false);
    setIsApprovalMode(true);
    // Fetch all requisitions when entering approval mode
    await fetchAllRequisitions();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      fetchAllRequisitions();
      setIsFormSubmitted(true);
    } catch (error) {
      console.error('Error adding requisition:', error.message);
      alert('Error adding requisition. Please try again.');
    }
  };

  const handleApproval = async (requisitionId, isApproved) => {
    try {
      // Make a POST request to handle requisition approval/disapproval
      const response = await fetch('http://localhost:5000/handle-requisition-approval', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ requisitionId, isApproved }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      // Update the requisitions state after approval/disapproval
      fetchAllRequisitions();
      alert(isApproved ? 'Requisition Approved!' : 'Requisition Disapproved!');
    } catch (error) {
      console.error('Error handling requisition approval/disapproval:', error.message);
      alert('Error handling requisition approval/disapproval. Please try again.');
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

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Requisition</h2>
      <div className="mb-3">
        <button className="btn btn-primary me-3" onClick={handleStartForm}>
          Fill Form
        </button>
        <button className="btn btn-secondary" onClick={handleStartApproval}>
          Approve/Disapprove Requests
        </button>
      </div>

      {isFormSubmitted && !isApprovalMode && (
        <p className="mb-3">Requisition has been submitted. Please approve or disapprove:</p>
      )}

      {(!isFormSubmitted || isApprovalMode) && (
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}

      {isFormSubmitted && isApprovalMode && (
        <div>
          <button
            className="btn btn-success me-3"
            onClick={() => handleApproval(true)}
          >
            Approve
          </button>
          <button
            className="btn btn-danger"
            onClick={() => handleApproval(false)}
          >
            Disapprove
          </button>
        </div>
      )}

      {/* Display all requisitions */}
      <div className="mt-5">
        <h3>All Requisitions</h3>
        <ul>
          {allRequisitions.map((req) => (
            <li key={req._id}>
              Club: {req.club}, Event Name: {req.eventName}, Event Date:{' '}
              {req.eventDate}, Amount: {req.amount}
              {isApprovalMode && !req.isApproved && (
                <button
                  className="btn btn-success ms-3"
                  onClick={() => handleApproval(req._id, true)}
                >
                  Approve
                </button>
              )}
              {isApprovalMode && !req.isApproved && (
                <button
                  className="btn btn-danger ms-3"
                  onClick={() => handleApproval(req._id, false)}
                >
                  Disapprove
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Requisition;
