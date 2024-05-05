import React, { useState } from 'react';
import './PopupForm.css'; // Ensure your styles are in this file

const PopupForm = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    dob: '',
    location: '',
    educationLevel: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.text())
    .then(message => {
      alert(message); 
      onClose();
    })
    .catch(error => console.error('Error:', error));
  };
  
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <div className="vertical-bar-popup"></div>
          <h2 className="popup-title">LET US CONTACT YOU</h2>
          <img
            src={`${process.env.PUBLIC_URL}/resources/pngs/SUNYOswegoLogoGreen.png`}
            alt="SUNY Oswego Logo"
            className="popup-logo"
          />
        </div>
        <form className="popup-form" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <input
            name="location"
            type="text"
            placeholder="Location (City/State/Zip)"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Your Education Level</option>
            <option value="High School Diploma">High School Diploma</option>
            <option value="GED">GED</option>
            <option value="Associates Degree">Associate's Degree</option>
            <option value="Bachelors Degree">Bachelor's Degree</option>
            <option value="Other">Other</option>
          </select>
          <div className="form-buttons">
            <button type="submit" className="submit-button">Submit</button>
            <button type="button" onClick={onClose} className="skip-button">Skip to Virtual Tour</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
