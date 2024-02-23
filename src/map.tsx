import React, { useState } from 'react';
import './App.css'; // Ensure this path is correct for your project structure

const Map = () => {
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState(''); // State to hold any validation error message

  // Function to validate the ZIP code format
  const isValidZipCode = (zip) => {
    return /^\d{5}$/.test(zip); // Checks if the zip is exactly 5 digits
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Clear any previous error messages
    setError('');

    // Check if the ZIP code is valid
    if (isValidZipCode(zipCode)) {
      console.log(zipCode); // Proceed with your form submission actions here
    } else {
      // If not valid, set an error message
      setError('Please enter a valid 5-digit ZIP code.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        {error && <div className="error-message">{error}</div>} {/* Display any validation error here */}
        <button type="submit" className="cool-animate-button">Submit</button>
      </form>
    </div>
  );
};

export default Map;
