import React from 'react';
import './App.css';
import ButtonBox from './components/ButtonBox';
import Map from './components/Map';
import { AgentProvider } from './context/AgentContext';
import { MapProvider } from './context/MapContext';
import { SideProvider } from './context/SideContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <AgentProvider>
      <MapProvider>
        <SideProvider>
          <DndProvider backend={HTML5Backend}>
            <div className="app">
              <ButtonBox />
              <div className="main-content">
                <Map />
              </div>
              <div className="right-sidebar">
                <div className="ads">
                  <img src="images/ad1.png" alt="Ad" />
                </div>
              </div>
            </div>
          </DndProvider>
        </SideProvider>
      </MapProvider>
    </AgentProvider>
  );
}

export default App;
