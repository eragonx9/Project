import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import './Bulletin.css';

const Bulletin = () => {
  const [notices, setNotices] = useState([]);

  // Fetch all notices from the backend when the component mounts
  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await fetch('http://localhost:5000/all-notices');
      const data = await response.json();
      setNotices(data);
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  const authenticateAndPerformAction = async (actionCallback) => {
    const enteredKey = prompt('Enter the authentication key:');
    if (enteredKey !== null && enteredKey === 'notice') {
      actionCallback();
    } else {
      alert('Authentication failed. Please try again.');
    }
  };

  const addNotice = () => {
    authenticateAndPerformAction(async () => {
      const newNotice = prompt('Enter a new notice:');
      if (newNotice) {
        try {
          const response = await fetch('http://localhost:5000/addnotice', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ notice: newNotice }),
          });
          const result = await response.json();
          if (result) {
            fetchNotices(); // Refresh notices after adding a new one
          }
        } catch (error) {
          console.error('Error adding notice:', error);
        }
      }
    });
  };

  const removeNotice = () => {
    authenticateAndPerformAction(async () => {
      const indexToRemove = prompt('Enter the index of the notice to remove:');
      if (indexToRemove !== null) {
        const selectedIndex = parseInt(indexToRemove, 10) - 1;
        const noticeToDelete = notices[selectedIndex];

        if (noticeToDelete) {
          try {
            const response = await fetch(`http://localhost:5000/delete-notice/${noticeToDelete._id}`, {
              method: 'DELETE',
            });
            const result = await response.json();
            if (result) {
              fetchNotices(); // Refresh notices after removing one
            }
          } catch (error) {
            console.error('Error removing notice:', error);
          }
        }
      }
    });
  };

  return (
    <div className="text-secondary px-4">
      <div className="Bulletin-ele py-3 my-2 rounded-4">
        <h1 className="display-5 fw-bold text-white text-center">Notice Board</h1>
        <div className="col-lg-8 py-2 px-2 rounded-4 bg-dark mx-auto border-light">
          <p
            style={{ minHeight: '10rem', maxHeight: '10rem', overflowY: 'scroll', overflowWrap: 'break-word' }}
            className="fs-5 mb-4"
          >
            <ol>
              {notices.map((notice, index) => (
                <li key={index}>{notice.notice}</li>
              ))}
            </ol>
          </p>
          <div className="px-2 mb-2 d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-md px-4 me-sm-3 fw-bold"
              onClick={addNotice}
            >
              Add New Notice
            </button>
            <button
              type="button"
              className="btn btn-warning btn-md px-4"
              onClick={removeNotice}
            >
              Remove Notice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bulletin;
