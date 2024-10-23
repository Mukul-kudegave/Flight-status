import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../index.css';
import Navbar from '../components/Navbar';

interface FlightDetailData {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

const FlightDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [flight, setFlight] = useState<FlightDetailData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlightDetails = async () => {

      try {
        
        setLoading(true);
        const response = await axios.get(`https://flight-status-mock.core.travelopia.cloud/flights/${id}`);
        setFlight(response.data);
        setLoading(false);
      } 
      
      catch (error) {
        setError('Failed to load flight details.');
        setLoading(false);
      }
    };

    fetchFlightDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!flight) return <p>No flight data available.</p>;

  return (
    <>
    <Navbar />
    <h1 className='detail-Heading'>Detail of Flight: {flight.flightNumber}</h1>
    <div className="flight-detail-card">
      {/* <h2>Flight Details</h2> */}
      <p><strong>Flight Number:</strong> {flight.flightNumber}</p>
      <p><strong>Airline:</strong> {flight.airline}</p>
      <p><strong>Origin:</strong> {flight.origin}</p>
      <p><strong>Destination:</strong> {flight.destination}</p>
      <p><strong>Departure Time:</strong> {flight.departureTime}</p>
      <p><strong>Status:</strong> {flight.status}</p>
      <br />
      <Link to="/status" className="back-link">Back to Status</Link>
    </div>
    </>
  );
};

export default FlightDetail;
