import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      navigate('/vehicle-info');
    } else {
      alert('Please enter both email and password to continue.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to AutoZone's AI Repair Companion</h1>
      <p>Login to continue</p>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default WelcomeLogin;
