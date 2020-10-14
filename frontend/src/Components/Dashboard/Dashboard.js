import React, { Suspense } from 'react';
import './Dashboard.css';
import OffersList from './OffersList/OffersList';
import loadingSpinner from '../Loading/loading-animation.gif';
    
const Dashboard = () => {
    
  return (
    <div className="dashboard">
      {/* <h2 className="dashboard__title">Dashboard</h2> */}
      <Suspense fallback={loadingSpinner}>
        <OffersList />
      </Suspense>
    </div>
  );
}

export default Dashboard;