import React from 'react';
import './Dashboard.css';
import OffersList from './OffersList/OffersList';
    
const Dashboard = (props) => {
    
  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Dashboard</h2>
      <OffersList />
    </div>
  );
}

export default Dashboard;