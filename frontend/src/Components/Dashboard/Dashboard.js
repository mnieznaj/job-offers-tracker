import React, { Suspense } from 'react';
import './Dashboard.css';
import OffersList from './OffersList/OffersList';
import loadingSpinner from '../Loading/loading-animation.gif';
    
const Dashboard = () => {
    
  return (
    <div className="dashboard">
      <Suspense fallback={loadingSpinner}>
        <OffersList />
      </Suspense>
    </div>
  );
}

export default Dashboard;