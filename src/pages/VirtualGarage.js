import React from 'react';
import { useNavigate } from 'react-router-dom';

const VirtualGarage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>My Virtual Garage</h2>
      <button onClick={() => navigate('/vehicle-details')}>2012 Honda Civic Si</button>
    </div>
  );
};

export default VirtualGarage;
