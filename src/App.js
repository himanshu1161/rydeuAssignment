import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesBar from './components/FeaturesBar';
import InfoSection from './components/InfoSection';
import OtherCities from './components/OtherCities';
import Footer from './components/Footer';
import MiniNav from './components/MiniNav';
import Help from './components/Help';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeaturesBar />
                <MiniNav />
                <InfoSection />
                <OtherCities />
                <Footer />
              </>
            }
          />
          <Route path="/help" element={<Help />} />
        </Routes>
       
      </div>
    </Router>
  );
}

export default App;
