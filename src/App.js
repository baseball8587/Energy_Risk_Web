import React from 'react';
import Map from './map.tsx'; 
import backgroundImage from './images/background.png'; // Adjust the path as necessary

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{ backgroundColor: '#004a70', padding: '20px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>Energy Risk</div>
        <nav>
          <a href="opt_1" style={{ color: 'white', marginLeft: '20px' }}>Logic 1</a>
          <a href="opt_2" style={{ color: 'white', marginLeft: '20px' }}>Logic 2</a>
          <a href="opt_3" style={{ color: 'white', marginLeft: '20px' }}>Logic 3</a>
          <a href="opt_4" style={{ color: 'white', marginLeft: '20px' }}>Logic 4</a>
          <a href="opt_5" style={{ color: 'white', marginLeft: '20px' }}>Logic 5</a>
          <a href="opt_6" style={{ color: 'white', marginLeft: '20px' }}>Español</a>
        </nav>
      </header>
      <main style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh' }}>
        <h1 style={{ color: '#004a70' }}>Finding Electric Rates is Easier Than Ever</h1>
        <p>Enter your zip code to instantly compare electricity plans for your home in Pennsylvania.</p>
        
        {/* Insert the Map component where the form used to be */}
        <Map />
        
        {/* Other content can remain as is or be adjusted based on your layout needs */}
        <a href="#">Learn about business plans →</a>
      </main>
    </div>
  );
}

export default App;
