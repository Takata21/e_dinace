"use client";
import { useEffect } from "react";
import { useState } from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
export default function LocationMarker({ handleMap, horizons }) {
  const CustomIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.3.3/dist/images/marker-icon.png",
    iconSize: [25, 41], // Ajusta el tamaño según sea necesario
    // iconAnchor: [16, 32],
    // popupAnchor: [0, -32],
  });
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(e) {
      console.log("Coordenadas al hacer clic:", e.latlng);
      setPosition(e);
      handleMap(e.latlng);
      setPosition(e.latlng);
    },
    locationfound(e) {
      console.log("Ubicación encontrada:", e.latlng);
      setPosition(e);
      handleMap(e.latlng);
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  useEffect(() => {
    // Obtener la ubicación inicial del usuario al cargar el mapa
    map.locate();
  }, [map]);
  return position === null ? null : (
    <>
      <Marker position={position} icon={CustomIcon}>
        <Popup>
          Coordenadas: {position.lat}, {position.lng}
        </Popup>
      </Marker>
    </>
  );
}
