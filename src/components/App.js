import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route

// Import your components
import Calculator from './Calculator';
import Quote from './quote';
import Home from './home';

// Import the Navigation component
import Navigation from './Navigation';

import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Include the Navigation component */}
        <Navigation />

        {/* Routes */}
        <div className="sections-container">
          <Routes>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
