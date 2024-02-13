import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lastThreeFeedbacks, setLastThreeFeedbacks] = useState([]);
  const [showLastThreeFeedbacks, setShowLastThreeFeedbacks] = useState(false);
  const [nameError, setNameError] = useState('');
  const [feedbackError, setFeedbackError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(''); // Clear error message when the user types
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
    setFeedbackError(''); // Clear error message when the user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that the name and feedback are not empty
    if (name.trim() === '') {
      setNameError('Name cannot be empty');
      return;
    }

    if (feedback.trim() === '') {
      setFeedbackError('Feedback cannot be empty');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/addfeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, feedback }),
      });
      const result = await response.json();
      if (result) {
        setSubmitted(true);
        setName('');
        setFeedback('');
        fetchLastThreeFeedbacks(); // Refresh last three feedbacks after submission
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  const fetchLastThreeFeedbacks = async () => {
    try {
      const response = await fetch('http://localhost:5000/last-three-feedbacks');
      const data = await response.json();
      setLastThreeFeedbacks(data);
    } catch (error) {
      console.error('Error fetching last three feedbacks:', error);
    }
  };

  const handleShowLastThreeFeedbacks = () => {
    setShowLastThreeFeedbacks(!showLastThreeFeedbacks);
    if (!showLastThreeFeedbacks) {
      fetchLastThreeFeedbacks(); // Fetch last three feedbacks when the button is clicked to show them
    }
  };

  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-md-8 Feedback-ele rounded-4">
          <div className="my-2 card">
            <div className="card-body">
              <h2 className="card-title">Feedback Form</h2>
              {submitted ? (
                <p>Thank you for your feedback {name}!!</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">
                      Your Name:
                    </label>
                    <input
                      type="text"
                      id="nameInput"
                      className={`form-control ${nameError ? 'is-invalid' : ''}`}
                      value={name}
                      onChange={handleNameChange}
                    />
                    <div className="invalid-feedback">{nameError}</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="feedbackTextarea" className="form-label">
                      Your Feedback:
                    </label>
                    <textarea
                      id="feedbackTextarea"
                      className={`form-control ${feedbackError ? 'is-invalid' : ''}`}
                      value={feedback}
                      onChange={handleFeedbackChange}
                      rows="4"
                    />
                    <div className="invalid-feedback">{feedbackError}</div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit Feedback
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="Feedback-ele rounded-4 row mt-5 justify-content-center align-items-start">
        <div className="col-md-7 ">
          <h1 className="display-5 fw-bold lh-1 mb-3">Give Us Feedback!</h1>
          <p className="lead">
            Your Feedback is extremely valuable to us and can help us improve the ECAMS to further extend the utility of this system.
          </p>
        </div>
        <div className="col-md-5 ">
          <h3>See Our Feedbacks:</h3>
          {showLastThreeFeedbacks && (
            <ul>
              {lastThreeFeedbacks.map((item, index) => (
                <li key={index}>
                  <strong>{item.feedback}</strong>
                </li>
              ))}
            </ul>
          )}
          <button className="btn btn-secondary" onClick={handleShowLastThreeFeedbacks}>
            {showLastThreeFeedbacks ? 'Hide Last Three Feedbacks' : 'Show Last Three Feedbacks'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
