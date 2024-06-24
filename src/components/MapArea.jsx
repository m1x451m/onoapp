import React from 'react';
import './MapArea.css';
import Map from './Map';
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const MapArea = () => {
  return (
    <div className="map-area">
      {/* <TransformWrapper
        wheel={{ step: 0.2 }}
        doubleClick={{ disabled: true }}
        pinch={{ disabled: true }}
        panning={{ disabled: false }}
      >
        <TransformComponent> */}
          <Map />
        {/* </TransformComponent>
      </TransformWrapper> */}
    </div>
  );
};

export default MapArea;
