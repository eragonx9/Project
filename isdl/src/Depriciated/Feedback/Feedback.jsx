import React, { useState, useEffect } from 'react';
import './Feedback.css';  // Import your CSS file for styling if needed

const Feedback = () => {
  // State to store feedback, submission status, and previous feedback
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [previousFeedback, setPreviousFeedback] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to handle changes in the feedback textarea
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform additional actions, such as sending the feedback to a server
    console.log('Feedback submitted:', feedback);
    setPreviousFeedback((prevFeedback) => [...prevFeedback, feedback]);
    setFeedback('');
    setSubmitted(true);
  };

  // Function to fetch previous feedback from the backend
  const fetchPreviousFeedback = async () => {
    try {
      setLoading(true);
      // Replace 'your-api-endpoint' with the actual endpoint to fetch previous feedbacks
      const response = await fetch('your-api-endpoint');
      const data = await response.json();
      setPreviousFeedback(data); // Assuming data is an array of previous feedbacks
    } catch (error) {
      console.error('Error fetching previous feedback:', error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect to fetch previous feedback when the component mounts
  useEffect(() => {
    fetchPreviousFeedback();
  }, []);

  return (
    <div className="feedback-container">
      <h2>Feedback Form</h2>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Your Feedback:
            <textarea
              value={feedback}
              onChange={handleFeedbackChange}
              rows="4"
              cols="50"
            />
          </label>
          <br />
          <button type="submit">Submit Feedback</button>
        </form>
      )}

      {/* Button to fetch and display previous feedback */}
      <button onClick={fetchPreviousFeedback} disabled={loading}>
        {loading ? 'Fetching Previous Feedback...' : 'Fetch Previous Feedback'}
      </button>

      {/* Display previous feedbacks */}
      {previousFeedback.length > 0 && (
        <div>
          <h3>Previous Feedbacks:</h3>
          <ul>
            {previousFeedback.map((feedback, index) => (
              <li key={index}>{feedback}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Feedback;
