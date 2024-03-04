import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Zipcode from './Zipcode.tsx';
import backgroundImage from './images/background.png';
import MapPage from './MapPage.tsx';
// Assuming ZipcodeFinder is correctly defined in './getZipcode'
// Import ZipcodeFinder if you plan to use it, otherwise, you can remove this import if it's not used in this file.

function App() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => { // This useEffect hook runs once the component mounts
    getUserLocation();
  }, []); // The empty array [] means this effect runs once after the initial render

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <Router>
      <div style={{ fontFamily: 'Libre Franklin' }}>
        <header style={{ backgroundColor: '#004a70', padding: '20px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>Energy Risk</div>
          <nav>
            <Link to="/" style={{ color: 'white', marginLeft: '20px' }}>Home</Link>
            <Link to="/interactive-map" style={{ color: 'white', marginLeft: '20px' }}>Interactive Map</Link>
            <Link to="/opt_2" style={{ color: 'white', marginLeft: '20px' }}>Español</Link>
            {/* Add more navigation links as needed */}
          </nav>
        </header>
        <main style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <Routes>
            <Route path="/" element={
              <>
                <h1 style={{ color: '#004a70' }}>Finding Electric Rates is Easier Than Ever</h1>
                <p>Enter your zip code to instantly compare electricity plans for your home in Pennsylvania.</p>
                <Zipcode />
                {/* The button has been removed as the location is fetched on component mount */}
                {userLocation && (
                  <div>
                    <h2>User Location</h2>
                    <p>Latitude: {userLocation.latitude}</p>
                    <p>Longitude: {userLocation.longitude}</p>
                  </div>
                )}
              </>
            } />
            <Route path="/interactive-map" element={<MapPage />} />
            {/* Define more Route components for other paths as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;