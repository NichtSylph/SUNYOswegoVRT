import React from 'react';
import './BackgroundVideo.css'; // Import the CSS you just created

const BackgroundVideo = () => (
  <div className="background-video">
    <video autoPlay loop muted playsInline>
      <source src={`${process.env.PUBLIC_URL}/resources/SUNYOswego1minVideo.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default BackgroundVideo;
