import React, { useState } from 'react';
import InfoBubble from './InfoBubble';
import './HelpComponent.css'; // Ensure your CSS is correctly importing

const HelpComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const helpContent = {
    name: "Help Guide",
    description: "Hover over a marker to see details about the location. Click the marker for a 360° virtual tour.",
  };

  return (
    <div className="help-component"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
      <img src={`${process.env.PUBLIC_URL}/resources/requestinfoIcon.svg`} alt="Help Icon" className="help-icon"/>
      {isHovered && <InfoBubble className="info-bubble-help" location={helpContent} />}
    </div>
  );
};

export default HelpComponent;