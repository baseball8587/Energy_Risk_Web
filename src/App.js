import React from 'react';
import Zipcode from './Zipcode.tsx'; 
import backgroundImage from './images/background.png'; // Adjust the path as necessary

function App() {
  return (
    <div style={{ fontFamily: 'Libre Franklin' }}>
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
      <main style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <h1 style={{ color: '#004a70' }}>Finding Electric Rates is Easier Than Ever</h1>
        <p>Enter your zip code to instantly compare electricity plans for your home in Pennsylvania.</p>
        
        <Zipcode />
        
        {/* Other content can remain as is or be adjusted based on your layout needs */}
        {/* <a href="#">Learn about business plans →</a> */}
      </main>
    </div>
  );
}


export default App;
