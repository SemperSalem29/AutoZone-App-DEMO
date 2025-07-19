import React from 'react';

const PartsPage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Parts</h2>
      <h4>Replaced Parts</h4>
      <ul>
        <li>Spark Plugs</li>
        <li>Battery</li>
      </ul>
      <h4>Suggested Parts</h4>
      <ul>
        <li><a href="https://www.autozone.com">Catalytic Converter (Link)</a></li>
        <li><a href="https://www.autozone.com">O2 Sensor (Link)</a></li>
      </ul>
    </div>
  );
};

export default PartsPage;
