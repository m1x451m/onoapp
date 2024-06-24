import React, { useContext, useEffect, useState } from 'react';
import './Map.css';
import { MapContext } from '../context/MapContext';
import { AgentContext } from '../context/AgentContext';
import { SideContext } from '../context/SideContext';

// 動的にピン位置データをインポートする関数
const importPinData = async (map, agent) => {
  try {
    const module = await import(`../pin/${map.toLowerCase()}/${map.toLowerCase()}_${agent.toLowerCase()}_pin.jsx`);
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
        const pinData = await importPinData(selectedMap, selectedAgent);
        if (pinData) {
          setPositions(pinData[selectedSide] || []);
        } else {
          setPositions([]);
        }
      } else {
        setPositions([]);
      }
    };

    loadPinData();
  }, [selectedMap, selectedAgent, selectedSide]);

  const handlePinClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="map-container">
      <div className="map-content">
        <img src={`images/map/${selectedMap ? selectedMap.toLowerCase() : 'default'}.png`} alt={`${selectedMap} Map`} className="map" />
        {positions.map((position) => (
          <img
            key={position.id}
            src={`images/agent/${selectedAgent.toLowerCase()}/${position.ablty}`}
            alt={`Ability ${position.id}`}
            className="ability-icon"
            style={{
              top: position.top,
              left: position.left,
              width: '2%',
              height: 'auto'
            }}
            onClick={() => handlePinClick(position.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default Map;
