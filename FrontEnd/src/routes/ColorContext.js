// ColorContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Default color

  useEffect(() => {
    // Check if color is set in sessionStorage
    const storedColor = sessionStorage.getItem('backgroundColor');
    if (storedColor) {
      setBackgroundColor(storedColor);
    }
  }, []);

  const setColor = (color) => {
    setBackgroundColor(color);
    sessionStorage.setItem('backgroundColor', color); // Store in sessionStorage
  };

  return (
    <ColorContext.Provider value={{ backgroundColor, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  return useContext(ColorContext);
};
