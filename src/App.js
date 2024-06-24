import React from 'react';
import './App.css';
import ButtonBox from './components/ButtonBox';
import MapArea from './components/MapArea';
import TopBar from './components/TopBar';
import { AgentProvider } from './context/AgentContext';
import { MapProvider } from './context/MapContext';
import { SideProvider } from './context/SideContext';

function App() {
  return (
    <AgentProvider>
      <MapProvider>
        <SideProvider>
          <div className="app">
            <TopBar />
            <div className="main-layout">
              <ButtonBox />
              <div className="main-content">
                <MapArea />
              </div>
              <div className="right-sidebar">
                <div className="ads">
                  <img src="images/ad1.png" alt="Ad" />
                </div>
              </div>
            </div>
          </div>
        </SideProvider>
      </MapProvider>
    </AgentProvider>
  );
}

export default App;
