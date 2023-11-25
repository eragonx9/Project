import React, { useState } from 'react';
import './NoticeBoard.css';
const NoticeBoard = () => {
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
    <div>
      <h2>Notice Board</h2>
      <ul>
        {notices.map((notice, index) => (
          <li key={index}>{notice}</li>
        ))}
      </ul>
      <button onClick={addNotice}>Add Notice</button>
    </div>
  );
};

export default NoticeBoard;
