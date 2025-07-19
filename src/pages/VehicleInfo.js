import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VehicleInfo = () => {
  const [vin, setVin] = useState('');
  const [vehicleFound, setVehicleFound] = useState(false);
  const navigate = useNavigate();

  const handleFindVehicle = () => {
    setVehicleFound(true);
  };

  const handleAddToGarage = () => {
    navigate('/virtual-garage');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Vehicle Information</h2>
      <input type="text" placeholder="Enter VIN" value={vin} onChange={(e) => setVin(e.target.value)} />
      <button onClick={handleFindVehicle}>Find My Vehicle</button>
      {vehicleFound && (
        <>
          <div style={{ marginTop: '20px' }}>
            <p><strong>Vehicle Found:</strong> 2012 Honda Civic Si</p>
            <select><option>Submodel: Si Coupe</option></select><br />
            <select><option>Transmission: 6-speed manual</option></select><br />
            <button>Upload Vehicle Photo</button><br /><br />
            <button onClick={handleAddToGarage}>Add to Virtual Garage</button>
          </div>
        </>
      )}
    </div>
  );
};

export default VehicleInfo;
