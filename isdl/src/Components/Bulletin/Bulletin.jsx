import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const Bulletin = () => {
    
    const [notices, setNotices] = useState([
        'Important Notice 1',
        'Upcoming Event: XYZ',
        'Reminder: Meeting at 2 PM',
      ]);
    
      const addNotice = () => {
        const newNotice = prompt('Enter a new notice:');
        if (newNotice) {
          setNotices([...notices, newNotice]);
        }
      };

  return (
    <div className="bg-secondary text-secondary px-4 py-3 text-center">
    <div className="py-0">
      <h1 className="display-5 fw-bold text-white">Notice Board</h1>
      <div className="col-lg-6 py-2 rounded-4 bg-dark mx-auto border-light">
        
        <p className="fs-5 mb-4">
            <ul>
            {notices.map((notice, index) => (
            <li key={index}>{notice}</li>
            ))}
            </ul>        
        </p>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-md px-4 me-sm-3 fw-bold" onClick={addNotice}>Add New Notice</button>
          <button type="button" className="btn btn-secondary btn-md px-4" onClick>Remove Notice</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Bulletin