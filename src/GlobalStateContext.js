// GlobalStateContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  theme: 'light',
  // Add more global state variables as needed
};

// Create context
const GlobalStateContext = createContext(initialState);

// Define reducer function to update state
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    // Add more cases for other state updates
    default:
      return state;
  }
};

// Provider component to wrap around your app
export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook to consume the global state
export const useGlobalState = () => useContext(GlobalStateContext);

