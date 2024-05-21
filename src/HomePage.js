// HomePage.js
import React from 'react';
import { useGlobalState } from './GlobalStateContext';
import './App.css'; // Import the CSS file

const HomePage = () => {
  const { state, dispatch } = useGlobalState();

  const handleToggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div className={`home-page ${state.theme}`}>
      <h1>Welcome to the {state.theme === 'light' ? 'Light' : 'Dark'} Theme</h1>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default HomePage;