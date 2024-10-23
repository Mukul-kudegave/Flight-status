import React from 'react';
import FlightTable from '../components/FlightTable';
import Navbar from '../components/Navbar';

const StatusPage: React.FC = () => {
  return (
    <div className="status-page">
    <Navbar />
      <h1>Flight Status Board</h1>
      <FlightTable /> {/* Flight Status Board component */}
    </div>
  );
};

export default StatusPage;
