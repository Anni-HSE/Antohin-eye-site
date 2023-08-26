import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Footer.css";

const Footer = () => {
  const position = [51.505, -0.09]; // Координаты для карты

  return (
    <footer className="footer-container">
      <div className="description">
        <h3>О нашем месте</h3>
        <p>Здесь вы можете найти много интересных вещей...</p>
      </div>
      <div className="map-container">
        <MapContainer center={position} zoom={13} className="map">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>Место нашего объекта</Popup>
          </Marker>
        </MapContainer>
      </div>
    </footer>
  );
};

export default Footer;
