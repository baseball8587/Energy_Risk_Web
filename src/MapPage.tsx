import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapPage = () => {
  const position = [41.2033, -77.1945]; // Approximate center of PA

  return (
    <MapContainer center={position} zoom={7} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Add map markers or other components here */}
    </MapContainer>
  );
};

export default MapPage;
