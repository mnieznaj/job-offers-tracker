import React from 'react';
import './Dashboard.css';
import OffersList from './OffersList/OffersList';
import { connect } from 'react-redux';
    
const Dashboard = (props) => {
    
  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Dashboard</h2>
      <OffersList />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    formType: state.formType,
    userId: state.userId,
    currentOfferId: state.currentOfferId,
    displayAddOffer: state.displayAddOffer,
    displayUpdateOffer: state.displayUpdateOffer,
    offersList: state.offersList
  }
}

export default connect(mapStateToProps)(Dashboard);