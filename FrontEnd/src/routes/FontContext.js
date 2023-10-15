// FontContext.js
import React, { createContext, useContext, useState } from 'react';

const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [fontColor, setFontColor] = useState('#000000'); // Default font color
  const [fontSize, setFontSize] = useState('16px'); // Default font size

  return (
    <FontContext.Provider value={{ fontColor, setFontColor, fontSize, setFontSize }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => {
  return useContext(FontContext);
};
