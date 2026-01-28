// ThemeContext - separated into its own file
// Used across multiple tutorials to demonstrate Context API patterns.

import { createContext, useContext, useState, useReducer } from 'react';

// 1) Basic Context
export const ThemeContext = createContext();

// 2) Custom hook to consume ThemeContext safely
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }
  return ctx;
}

// 3) Optional: reducer-based theme state for advanced examples
export const initialThemeState = {
  mode: 'light',
  primaryColor: '#2196f3',
  accentColor: '#ff9800',
};

export function themeReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MODE':
      return {
        ...state,
        mode: state.mode === 'light' ? 'dark' : 'light',
      };
    case 'SET_PRIMARY_COLOR':
      return {
        ...state,
        primaryColor: action.payload,
      };
    case 'RESET':
      return initialThemeState;
    default:
      return state;
  }
}

// 4) Provider with simple or reducer-based state
export function ThemeProvider({ children, useReducerMode = false }) {
  const [simpleMode, setSimpleMode] = useState('light');

  const [state, dispatch] = useReducer(themeReducer, initialThemeState);

  const value = useReducerMode
    ? {
        state,
        dispatch,
      }
    : {
        mode: simpleMode,
        toggleMode: () => setSimpleMode((prev) => (prev === 'light' ? 'dark' : 'light')),
      };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

