import React, { useContext } from 'react';
import './ButtonBox.css';
import { AgentContext } from '../context/AgentContext';
import { MapContext } from '../context/MapContext';
import { SideContext } from '../context/SideContext';

const agents = [
  { name: 'Astra', img: 'astra.png' },
  { name: 'Breach', img: 'breach.png' },
  { name: 'Brimstone', img: 'brimstone.png' },
  // 他のエージェントを追加...
];

const maps = [
  'ASCENT', 'BIND', 'HAVEN', 'SPLIT', 'ICEBOX'
];

const ButtonBox = () => {
  const { selectedAgent, setSelectedAgent } = useContext(AgentContext);
  const { selectedMap, setSelectedMap } = useContext(MapContext);
  const { selectedSide, setSelectedSide } = useContext(SideContext);

  const handleMapChange = (event) => {
    setSelectedMap(event.target.value);
  };

  const handleAgentClick = (agent) => {
    setSelectedAgent(agent.name);
  };

  const handleSideClick = (side) => {
    setSelectedSide(side);
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = null;
    e.target.alt = e.target.getAttribute('data-name');
  };

  return (
    <div className="button-box">
      <select className="map-select" value={selectedMap} onChange={handleMapChange}>
        {maps.map(map => (
          <option key={map} value={map}>{map}</option>
        ))}
      </select>
      <div className="tabs">
        <button
          className={`tab-button ${selectedSide === 'アタッカー' ? 'active' : ''}`}
          onClick={() => handleSideClick('アタッカー')}
        >
          アタッカー
        </button>
        <button
          className={`tab-button ${selectedSide === 'ディフェンダー' ? 'active' : ''}`}
          onClick={() => handleSideClick('ディフェンダー')}
        >
          ディフェンダー
        </button>
      </div>
      <div className="agents">
        {agents.map(agent => (
          <div
            className={`agent ${selectedAgent === agent.name ? 'selected' : ''}`}
            key={agent.name}
            onClick={() => handleAgentClick(agent)}
          >
            <img src={`images/${agent.img}`} alt={agent.name} data-name={agent.name} onError={handleImageError} />
          </div>
        ))}
      </div>
      <div className="abilities">
        <AbilityButtons />
      </div>
    </div>
  );
};

const AbilityButtons = () => {
  const { selectedAgent } = useContext(AgentContext);

  return (
    <>
      {[1, 2, 3, 4].map(num => (
        <button key={num} className="ability-button">
          {selectedAgent && <img src={`images/${selectedAgent.toLowerCase()}_ablty${num}.png`} alt={`Ability ${num}`} />}
        </button>
      ))}
    </>
  );
};

export default ButtonBox;
