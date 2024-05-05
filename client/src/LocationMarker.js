import React, { useState } from "react";
import "./LocationMarker.css";
import InfoBubble from "./InfoBubble";

// Function to dynamically load the virtual tour script
const loadVirtualTourScript = (url, callback) => {
  const script = document.createElement("script");
  script.src = "https://static.kuula.io/embed.js";
  script.setAttribute("data-kuula", url);
  script.setAttribute("data-width", "100%");
  script.setAttribute("data-height", "640px");
  script.onload = callback;
  document.body.appendChild(script);
};

// Location coordinates mapping
const locationCoordinates = {
  1: { x: 16.7, y: 54 },
  2: { x: 16, y: 35.6 },
  3: { x: 20.8, y: 26.5 },
  4: { x: 21.5, y: 37.4 },
  5: { x: 26.8, y: 28 },
  6: { x: 28.1, y: 34.4 },
  7: { x: 32.7, y: 27.8 },
  8: { x: 38.8, y: 33.5 },
  9: { x: 40.5, y: 36.5 },
  10: { x: 41.6, y: 25.8 },
  11: { x: 45.5, y: 25 },
  12: { x: 44.6, y: 34.2 },
  13: { x: 48.4, y: 27.6 },
  14: { x: 48, y: 33.6 },
  15: { x: 49.7, y: 40.2 },
  16: { x: 51.6, y: 36.7 },
  17.1: { x: 54.8, y: 30 },
  17.2: { x: 66, y: 30.5 },
  18: { x: 56.6, y: 13.5 },
  19: { x: 59.7, y: 13.5 },
  20: { x: 64.5, y: 12.8 },
  21: { x: 73.3, y: 11.2 },
  22: { x: 77.3, y: 13.5 },
  23: { x: 80.7, y: 11.7 },
  24: { x: 71, y: 32 },
  25: { x: 76, y: 25 },
  26: { x: 74.8, y: 34.5 },
  27: { x: 78.9, y: 33.6 },
  28: { x: 79.5, y: 44.8 },
  29: { x: 74.8, y: 55 },
  30: { x: 86.5, y: 38.5 },
  31: { x: 86.5, y: 52.5 },
  32: { x: 92.5, y: 39 },
  33: { x: 86.8, y: 15 },
  34: { x: 54, y: 57 },
  35: { x: 56.8, y: 60.8 },
  36: { x: 58.6, y: 57.8 },
  37: { x: 53.7, y: 79.5 },
  38: { x: 61.6, y: 74.3 },
};
const LocationMarker = ({ location, onHover, onSelect, isSublocation }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Extract the base pointerLocationNumber (e.g., "17") from the location prop
  const basePointerLocationNumber = location.pointerLocationNumber.split('.')[0];

  // Match the base pointerLocationNumber with sublocations "1" and "2" to "17.1" and "17.2" respectively in locationCoordinates
  const locationKey = location.sublocation 
    ? `${basePointerLocationNumber}.${parseInt(location.sublocation * 10, 10)}`
    : basePointerLocationNumber;

  const { x, y } = locationCoordinates[locationKey] || { x: 0, y: 0 };

  // Proceed only if coordinates are defined
  if (x === 0 && y === 0) return null;

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onHover) onHover(location);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onHover) onHover(null);
  };

  const handleClick = () => {
    if (location.vrtourUrl) {
      loadVirtualTourScript(location.vrtourUrl, () => {
        window.open(location.vrtourUrl, '_blank');
      });
    }
    if (onSelect) {
      onSelect(location);
    }
  };

  // Determine the class to apply based on whether it is a sublocation
  const markerClass = isSublocation
    ? "location-marker sublocation"
    : "location-marker";

  return (
    <div
      className={markerClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
        cursor: "pointer",
        zIndex: isHovered ? 2000 : 1 // Ensures InfoBubble appears on top
      }}
    >
      <img
        src={
          isHovered
            ? `${process.env.PUBLIC_URL}/resources/selectedPointer.svg`
            : `${process.env.PUBLIC_URL}/resources/mapPointer.svg`
        }
        alt={`Location ${location.name}`}
        className={isHovered ? "selected-pointer-icon" : "map-pointer-icon"}
      />
      <div className="location-number">
        {basePointerLocationNumber} {/* Display the base pointer location number */}
      </div>
      {isHovered && (
        <InfoBubble
          className="info-bubble-location"
          location={{
            name: location.name,
            description: location.description,
            imageUrl: location.imageUrl,
          }}
        />
      )}
    </div>
  );
};

export default LocationMarker;