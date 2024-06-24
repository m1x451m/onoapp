import React, { useContext, useEffect, useState } from 'react';
import './Map.css';
import { MapContext } from '../context/MapContext';
import { AgentContext } from '../context/AgentContext';
import { SideContext } from '../context/SideContext';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// 動的にピン位置データをインポートする関数
const importPinData = async (map, agent) => {
  try {
    const module = await import(`../pin/${map.toLowerCase()}/${map.toLowerCase()}_${agent.toLowerCase()}_pin.jsx`);
    console.log(`Loaded pin data for ${map} ${agent}:`, module.default);
    return module.default;
  } catch (error) {
    console.error(`Error loading pin data for ${map} ${agent}:`, error);
    return null;
  }
};

const Map = () => {
  const { selectedMap } = useContext(MapContext);
  const { selectedAgent } = useContext(AgentContext);
  const { selectedSide } = useContext(SideContext);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const loadPinData = async () => {
      if (selectedMap && selectedAgent) {
        console.log(`Loading pin data for ${selectedMap} ${selectedAgent} (${selectedSide})`);
        const pinData = await importPinData(selectedMap, selectedAgent);
        if (pinData) {
          console.log(`Pin data for ${selectedSide}:`, pinData[selectedSide]);
          setPositions(pinData[selectedSide] || []);
        }
      }
    };

    loadPinData();
  }, [selectedMap, selectedAgent, selectedSide]);

  return (
    <div className="map-container">
      <TransformWrapper wheel={{ step: 0.2 }}>
        <TransformComponent>
          <img src={`images/map/${selectedMap.toLowerCase()}.png`} alt={`${selectedMap} Map`} className="map" />
          {positions.map((position) => (
            <img
              key={position.id}
              src={`images/agent/${selectedAgent.toLowerCase()}/${position.ablty}`}
              alt={`Ability ${position.id}`}
              className="ability-icon"
              style={{ top: position.top, left: position.left }}
            />
          ))}
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default Map;
