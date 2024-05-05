import React from 'react';
import './InfoBubble.css';

const InfoBubble = ({ location, className }) => {
  if (!location) {
    return null;
  }

  const { name, description, imageUrl } = location;

  return (
    <div className={`info-bubble ${className}`}>
      {imageUrl && (
        <img src={imageUrl} alt={`View of ${name}`} className="info-bubble-image" />
      )}
      {imageUrl && <div className="division-bar"></div>}
      <div className="info-bubble-content">
        <h2 className="info-bubble-title">{name}</h2>
        <p className="info-bubble-description">{description}</p>
      </div>
    </div>
  );
};

export default InfoBubble;
