import React from 'react';
import './Dashboard.css';
import OffersList from './OffersList/OffersList';

import { connect } from 'react-redux';
import { displayAddOfferForm } from '../../store/actions/dashboardActions';
    
const Dashboard = (props) => {
    
  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Dashboard</h2>
      {/* <button onClick={() => props.displayAddOffer(true)}>Add new offer</button> */}
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
const mapDispatchToProps = dispatch => {
  return {
      displayAddOffer: (show) => dispatch(displayAddOfferForm(show))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);