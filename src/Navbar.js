// Navbar.js
import React from 'react';
import { useGlobalState } from './GlobalStateContext';
import LoginForm from './LoginForm';
import './App.css';

const Navbar = () => {
  const { state } = useGlobalState();

  return (
    <nav>
      <ul>
        <li>{state.isAuthenticated ? `Welcome, ${state.user}` : <LoginForm />}</li>
      </ul>
    </nav>
  );
};

export default Navbar;