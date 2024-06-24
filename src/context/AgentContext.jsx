import React, { createContext, useState } from 'react';

export const AgentContext = createContext();

export const AgentProvider = ({ children }) => {
  const [selectedAgent, setSelectedAgent] = useState(null);

  return (
    <AgentContext.Provider value={{ selectedAgent, setSelectedAgent }}>
      {children}
    </AgentContext.Provider>
  );
};
