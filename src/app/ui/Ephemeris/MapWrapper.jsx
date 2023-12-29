"use client";
import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import "leaflet/dist/leaflet.css";
export const MapWrapper = ({ handleMap, horizons }) => {
  const mapRef = useRef(null);

  return (
    <MapContainer
      center={[8.488, -80.328]}
      zoom={13}
      // style={{ height: "500px", width: "100%" }}
      className="h-full md:h-[500px] w-full"
      whenCreated={(map) => (mapRef.current = map)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <LocationMarker handleMap={handleMap} horizons={horizons} />
      {/* Agregar otros componentes Leaflet según sea necesario */}
    </MapContainer>
  );
};
