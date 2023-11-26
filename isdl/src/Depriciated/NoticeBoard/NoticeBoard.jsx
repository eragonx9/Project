import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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

  const editNotice = (index) => {
    const updatedNotice = prompt('Edit the notice:', notices[index]);
    if (updatedNotice !== null) {
      const updatedNotices = [...notices];
      updatedNotices[index] = updatedNotice;
      setNotices(updatedNotices);
    }
  };

  return (
    <div className=''>
      <h2>Notice Board</h2>
      <ul>
        {notices.map((notice, index) => (
          <li key={index}>
            {notice}
            <button onClick={() => editNotice(index)}>Edit</button>
          </li>
        ))}
      </ul>
      <button onClick={addNotice}>Add Notice</button>
    </div>
  );
};

export default NoticeBoard;
