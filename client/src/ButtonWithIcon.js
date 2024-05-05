import React from 'react';
import './ButtonWithIcon.css';

const ButtonWithIcon = ({ iconPath, buttonText, onClick }) => {
  return (
    <button className="button-with-icon" onClick={onClick}>
      <img src={iconPath} alt={buttonText} className="button-icon" />
      {buttonText}
    </button>
  );
};

export default ButtonWithIcon;
