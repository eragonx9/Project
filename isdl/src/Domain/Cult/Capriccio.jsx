import React, { useState, useEffect } from 'react';
import ClubDetailsTemplate from '../../Components/Club_Template/ClubDetailsTemplate';
import clubData from '../../Components/Club_Template/ClubData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../Components/Footer/Footer';
import '../club.css'


const Capriccio = () => {
  const [recruitmentData, setRecruitmentData] = useState([]);
  const [showData, setShowData] = useState(false);
  const [authKey, setAuthKey] = useState('');
  const correctAuthKey = 'Capriccio'; 
  const clubName = 'Capriccio';

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
    if (showData && authKey === correctAuthKey) {
      fetchData();
    }
  }, [showData, authKey, correctAuthKey]);

  const toggleDataVisibility = () => {
    if (showData) {
      setRecruitmentData([]); // Clear the data when hiding
    } else {
      const enteredKey = prompt('Enter the authentication key:');
      if (enteredKey !== null) {
        setAuthKey(enteredKey);
      }
    }
    setShowData(!showData);
  };

  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <ClubDetailsTemplate clubDetails={clubData[clubName]} />


      <div className=" club-ele container my-5">

      <button onClick={toggleDataVisibility} style={{ margin: '10px' }}>
        {showData ? 'Hide Recruitment Data' : 'Show Recruitment Data'}
      </button>
      {showData && authKey !== correctAuthKey && (
        <p style={{ color: 'red' }}>Authentication failed. Please try again.</p>
      )}
      {showData && authKey === correctAuthKey && recruitmentData.length > 0 && (
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
    </div>
    <Footer/>
    </>
  );
};

export default Capriccio;
