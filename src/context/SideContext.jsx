import React, { createContext, useState } from 'react';

export const SideContext = createContext();

export const SideProvider = ({ children }) => {
  const [selectedSide, setSelectedSide] = useState('アタッカー');

  return (
    <SideContext.Provider value={{ selectedSide, setSelectedSide }}>
      {children}
    </SideContext.Provider>
  );
};
