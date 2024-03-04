import React, { useState } from 'react';

function ZipcodeFinder() {
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState('');

  const convertLatLongToZip = async (latitude, longitude) => {
    const apiKey = 'YOUR_OPENCAGE_API_KEY'; // Replace with your OpenCage API Key
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const zip = data.results[0]?.components?.postcode;
      if (zip) {
        setZipCode(zip);
      } else {
        setError('ZIP code not found for your location.');
      }
    } catch (err) {
      setError('Failed to fetch ZIP code.');
      console.error(err);
    }
  };

  const findLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          convertLatLongToZip(position.coords.latitude, position.coords.longitude);
        },
        () => {
          setError('Permission denied or unable to retrieve your location.');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <button onClick={findLocation}>Find My ZIP Code</button>
      {zipCode && <p>Your ZIP Code: {zipCode}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default ZipcodeFinder;
