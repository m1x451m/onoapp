import React from 'react';
import './MapArea.css';
import Map from './Map';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const handleClick = () => {
  // クリックイベントの処理
  console.log('Button clicked!');
};

const MapArea = () => {
  return (
    <div className="map-area">
      <TransformWrapper
        wheel={{ step: 0.2 }}
        doubleClick={{ disabled: true }}
        pinch={{ disabled: true }}
        panning={{ disabled: false }}
      >
        <TransformComponent>
          <div className="map-container">
            <button onClick={handleClick} className="ability-icon-button" style={{ backgroundImage: 'url(path/to/image)' }}>
              {/* Button content here if needed */}
            </button>
            <Map />
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default MapArea;
