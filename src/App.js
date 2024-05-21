// App.js
import React from 'react';
import { GlobalStateProvider } from './GlobalStateContext';
import Navbar from './Navbar';
import HomePage from './HomePage';
import "./App.css"

const App = () => {
  return (
    <GlobalStateProvider>
      <Navbar />
      <HomePage />
    </GlobalStateProvider>
  );
};

export default App;