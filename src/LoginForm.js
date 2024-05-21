// LoginForm.js
import React, { useState } from 'react';
import { useGlobalState } from './GlobalStateContext';
import './App.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useGlobalState();

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      dispatch({ type: 'LOGIN', payload: username });
      setUsername('');
      setPassword('');
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="login-form">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;