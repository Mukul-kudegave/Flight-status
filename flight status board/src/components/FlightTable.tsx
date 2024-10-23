import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../index.css';

interface Flight {
  id: string; 
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

const FlightTable: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Fetch data from the API
  useEffect(() => {
    const fetchFlights = async () => {

      try {

        setLoading(true);
        const response = await axios.get('https://flight-status-mock.core.travelopia.cloud/flights');
        setFlights(response.data);
        setLoading(false);
      } 
      
      catch (error) {
        setError('Failed to load flight data.');
        setLoading(false);
      }
    };

    fetchFlights();

    // Refresh the data after 60s
    const intervalId = setInterval(fetchFlights, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const handleRowClick = (id: string) => {
    navigate(`/flights/${id}`); 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <table className="flight-table">
      <thead>
        <tr>
          <th>Flight Number</th>
          <th>Airline</th>
          <th>Origin</th>
          <th>Destination</th>
          <th>Departure Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight) => (
          <tr 
            key={flight.id} 
            onClick={() => handleRowClick(flight.id)} 
            className="clickable-row"
          >
            <td>{flight.flightNumber}</td>
            <td>{flight.airline}</td>
            <td>{flight.origin}</td>
            <td>{flight.destination}</td>
            <td>{flight.departureTime}</td>
            <td>{flight.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FlightTable;
