import React, { useState } from 'react';
import Header from './Header';
import BackgroundVideo from './BackgroundVideo';
import Map from './Map';
import Footer from './Footer';
import PopupForm from './PopupForm';
import './App.css';

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="app">
      <Header />
      <BackgroundVideo />
      {showPopup && <PopupForm onClose={handleClosePopup} />}
      <div className="main-content">
        <Map />
      </div>
      <Footer />
    </div>
  );
};

export default App;
