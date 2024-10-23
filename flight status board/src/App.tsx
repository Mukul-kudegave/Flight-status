import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StatusPage from './pages/StatusPage';
import FlightDetailPage from './pages/FlightDetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/status" element={<StatusPage />} />
        <Route path="/flights/:id" element={<FlightDetailPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
