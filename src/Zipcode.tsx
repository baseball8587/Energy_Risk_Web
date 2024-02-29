import React, { useState } from 'react';
import './App.css'; // Ensure this path is correct for your project structure

const Zipcode = () => {
  const [zipCode, setZipCode] = useState('');//State to hold the Zipcode
  const [error, setError] = useState(''); // State to hold any validation error message
  const [imageData, setImageData] = useState(''); // State to hold the image data
  const [distributorName, setDistributorName] = useState(''); // State to hold the distributor's name

  // Function to validate the ZIP code format
  const isValidZipCode = (zip) => {
    return /^\d{5}$/.test(zip); // Checks if the zip is exactly 5 digits
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setImageData(''); // Clear previous image data
    setDistributorName(''); // Clear previous distributor name

    if (isValidZipCode(zipCode)) {
        fetch('http://127.0.0.1:5000/get-distributor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ zipCode }),
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Distributor not found for provided ZIP code');
      })
      .then(data => {
        // Update state with the distributor's image and name
        setImageData(data.image);
        setDistributorName(data.distributor);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error.message);
      });
    } else {
      setError('Please enter a valid 5-digit ZIP code.');
    }
  };

  const handleInputChange = (e) => {
    setZipCode(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={handleInputChange}
          placeholder="Zip Code"
          className="rounded-input"
        />
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="cool-animate-button">Submit</button>
      </form>
      {distributorName && (
        <div className="distributor-card">
          <div className="distributor-name">{distributorName}</div>
          {imageData && <img src={`data:image/jpeg;base64,${imageData}`} alt="Distributor" className="distributor-image" />}
        </div>
      )}
    </div>
  );
  
};

export default Zipcode;
