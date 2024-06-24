import React, { createContext, useState } from 'react';

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [selectedMap, setSelectedMap] = useState('ASCENT');

  return (
    <MapContext.Provider value={{ selectedMap, setSelectedMap }}>
      {children}
    </MapContext.Provider>
  );
};
