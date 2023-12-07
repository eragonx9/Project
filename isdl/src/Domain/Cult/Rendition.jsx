import React, { useState, useEffect } from 'react';
import ClubDetailsTemplate from '../../Components/Club_Template/ClubDetailsTemplate';
import clubData from '../../Components/Club_Template/ClubData';
const Rendition = () => {
  const [recruitmentData, setRecruitmentData] = useState([]);
  const [showData, setShowData] = useState(false);
  const clubName = 'Rendition'; 

  const fetchData = async () => {
    try {
      
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
      <ClubDetailsTemplate clubDetails={clubData[clubName]} />
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

export default Rendition;
