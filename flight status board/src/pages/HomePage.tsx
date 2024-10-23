import React from 'react';
import Navbar from '../components/Navbar';
// import FlightTable from '../components/FlightTable';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h1>About Flight Status</h1>
          <p>
            Welcome to Flight Status, your go-to platform for real-time flight information.
            Our app helps you stay informed with the latest updates on departures, arrivals, delays,
            and cancellations for any flight worldwide. Whether you're a frequent flyer or picking up a loved one,
            Flight Status ensures you have all the information you need for a smooth travel experience.
          </p>
          <p>
            Our mission is to provide accurate, up-to-date flight data, helping passengers stay ahead of any changes.
            We aggregate information from multiple sources to give you detailed insights into any flight.
          </p>
          <p>
            At Flight Status, we aim to enhance your travel experience by providing a reliable, convenient,
            and accessible flight tracking solution. Stay updated with our app and have peace of mind on every journey.
          </p>
        </div>
        <div className="about-img">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/people-choosing-vacation-routes-and-travel-agency-offers-destinations-for-recreation-flight-reservation-illustration-download-in-svg-png-gif-file-formats--fight-location-isometric-pack-miscellaneous-illustrations-9898748.png?f=webp" alt="Flight tracking" />
        </div>
      </div>
    </div>
      {/* <h1>Flight Status Board</h1>
      <FlightTable /> */}
    </div>
  );
};

export default HomePage;
