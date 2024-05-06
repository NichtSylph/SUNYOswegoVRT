import React, { useState, useEffect } from 'react';
import LocationMarker from './LocationMarker';
import InfoBubble from './InfoBubble';
import HelpComponent from './HelpComponent';
import './Map.css';

const Map = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/locations`, { mode: 'no-cors' })
      .then(response => response.json())
      .then(data => {
        const processedData = data.map(location => {
          let formattedPointerLocationNumber = location.pointerLocationNumber ? location.pointerLocationNumber.toString() : '';
          if (location.sublocation) {
            let sublocationString = parseFloat(location.sublocation).toString();
            formattedPointerLocationNumber += `.${sublocationString.split('.')[1]}`;
          }
          return {
            ...location,
            pointerLocationNumber: formattedPointerLocationNumber,
          };
        });
        setLocations(processedData);
      })
      .catch(error => console.error('Error fetching locations:', error));
  }, []);

  const handleMarkerHover = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="map-container">
      <img src={`${process.env.PUBLIC_URL}/resources/pngs/OswegoMap.png`} alt="SUNY Oswego Map" className="map-image" />
      {locations.map(location => (
        <LocationMarker
          key={location.id}
          location={location}
          onHover={() => handleMarkerHover(location)}
        />
      ))}
      {selectedLocation && (
        <InfoBubble location={selectedLocation} />
      )}
      <HelpComponent />
    </div>
  );
};

export default Map;
