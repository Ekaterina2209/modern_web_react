// ColorContext.js
import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const useColor = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const toggleColor = () => {
    setBackgroundColor(prevColor => prevColor === 'white' ? 'black' : 'white');
  };

  return { backgroundColor, toggleColor };
};

export const ColorContextProvider = ({ children }) => {
  const colorContextValue = useColor();
  return <ColorContext.Provider value={colorContextValue}>{children}</ColorContext.Provider>;
};

export const useColorContext = () => useContext(ColorContext);
