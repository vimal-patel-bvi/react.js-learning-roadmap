// Custom Hook: useLocalStorage
// Keeps state in sync with localStorage.

import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue;

    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error('useLocalStorage: error reading key', key, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('useLocalStorage: error setting key', key, error);
    }
  }, [key, value]);

  return [value, setValue];
}

