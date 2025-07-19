import React, { useState } from 'react';

const VehicleDetails = () => {
  const [diagnosticMode, setDiagnosticMode] = useState(false);
  const [issue, setIssue] = useState('');

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>2012 Honda Civic Si</h2>
      <p>[Rotatable 3D Model Placeholder]</p>
      <p>Submodel: Si Coupe</p>
      <p>Transmission: Manual</p>
      <button onClick={() => setDiagnosticMode(true)}>Vehicle Diagnostics</button>
      {diagnosticMode && (
        <div>
          <textarea placeholder="Describe the issue" value={issue} onChange={(e) => setIssue(e.target.value)} />
          <br />
          <button>🎤 Voice Input</button><br />
          <select>
            <option>P0301 - Cylinder 1 Misfire</option>
            <option>P0420 - Catalyst System Efficiency</option>
          </select><br />
          <button>Add Code</button>
        </div>
      )}
    </div>
  );
};

export default VehicleDetails;
