import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FeedbackForm = () => {
  // State to store feedback and submission status
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Function to handle changes in the feedback textarea
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform additional actions, such as sending the feedback to a server
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
  };

  return (
    <div className="container flex py-5">
      
      <div className="justify-content-center flex-grow-1 flex-shrink-1">  
        <div className="FeedbackForm">
          {/* Feedback Form */}
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Feedback Form</h2>
              {submitted ? (
                <p>Thank you for your feedback!</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="feedbackTextarea" className="form-label">
                      Your Feedback:
                    </label>
                    <textarea
                      id="feedbackTextarea"
                      className="form-control"
                      value={feedback}
                      onChange={handleFeedbackChange}
                      rows="4"
                    />
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

      <div className=" mt-5">
        <div className="FeedbackText">
          <h1 className="display-5 fw-bold lh-1 mb-3">Please Give Us Feedback!</h1>
          <p className="lead">
            Your Feedback is extremely valuable to us and can help us improve the ECAMS to further extend the utility of this system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
