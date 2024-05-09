import React, { useState, useEffect } from 'react';
import { getSDGs } from '../data/api';

const Dashboard = () => {
  const [sdgs, setSDGs] = useState([]);
  const [selectedSDG, setSelectedSDG] = useState(null);

  useEffect(() => {
    // Fetch SDGs data from the API
    getSDGs()
      .then(response => {
        setSDGs(response.data);
      })
      .catch(error => {
        console.error('Error fetching SDGs data:', error);
      });
  }, []);

  const handleSDGSelect = (sdg) => {
    // Update the selected SDG
    setSelectedSDG(sdg);
  };

  return (
    <div>
      <h1>SDG Dashboard</h1>
      <ul>
        {/* Render a list of SDGs */}
        {sdgs.map((sdg) => (
          <li key={sdg.id}>
            {/* Clickable link for each SDG */}
            <a href="#" onClick={() => handleSDGSelect(sdg)}>
              {sdg.name}
            </a>
          </li>
        ))}
      </ul>
      {/* Display selected SDG and its targets */}
      {selectedSDG && (
        <div>
          <h2>{selectedSDG.name}</h2>
          <p>Targets:</p>
          <ul>
            {/* Render a list of targets for the selected SDG */}
            {selectedSDG.targets.map((target) => (
              <li key={target.id}>{target.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
