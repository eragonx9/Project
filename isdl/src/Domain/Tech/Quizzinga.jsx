import React, { useState, useEffect } from 'react';

const Quizzinga = () => {
  const [recruitmentData, setRecruitmentData] = useState([]);
  const [showData, setShowData] = useState(false);
  const clubName = 'Quizzinga'; // Replace 'Aaveg' with the specific club name

  const fetchData = async () => {
    try {
      // Replace 'http://localhost:5000' with the actual URL of your backend
      const response = await fetch(`http://localhost:5000/get-recruitment-data?club=${clubName}`);
      if (response.ok) {
        const data = await response.json();
        setRecruitmentData(data);
      } else {
        console.error('Failed to fetch recruitment data');
      }
    } catch (error) {
      console.error('Error fetching recruitment data:', error);
    }
  };

  useEffect(() => {
    if (showData) {
      fetchData();
    }
  }, [showData]);

  const toggleDataVisibility = () => {
    setShowData(!showData);
  };

  return (
    <div>
      <h2>{clubName}</h2>
      <button onClick={toggleDataVisibility}>
        {showData ? 'Hide Recruitment Data' : 'Show Recruitment Data'}
      </button>
      {showData && recruitmentData.length > 0 && (
        <div>
          <h3>Recruitment Data:</h3>
          <ul>
            {recruitmentData.map((data) => (
              <li key={data._id}>
                <strong>Name:</strong> {data.name}, <strong>Club:</strong> {data.club},{' '}
                <strong>Domain:</strong> {data.domain}, <strong>Roll Number:</strong>{' '}
                {data.rollNumber}, <strong>Contact:</strong> {data.contact}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quizzinga;
